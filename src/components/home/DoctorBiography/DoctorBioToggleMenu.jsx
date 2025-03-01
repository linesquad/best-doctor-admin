import { useState } from "react";
import { toast } from "react-toastify";

import DoctorModal from "./DoctorModal";
import useUpdateDoctorBio from "../../../hooks/useDoctorBio/useUpdateDoctorBio";
import useUpdateDoctorBioImage from "../../../hooks/useDoctorBio/useUpdateDoctorBioImage";
import { handleUploadImageMiddle } from "../../../service/uploadImageAndMutateSupa";

function DoctorBioToggleMenu({
  isOpen,
  id,
  docId,
  doctorFullname,
  doctorStatus,
  doctorDegree,
}) {
  const [selectedAction, setSelectedAction] = useState(null);
  const [file, setFile] = useState(null);
  const { mutate: updateDoctorBio, isPending: BioPending } =
    useUpdateDoctorBio();
  const { mutate: updateDoctorImage } = useUpdateDoctorBioImage();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      toast.error("No file selected.");
      return;
    }
    setFile(selectedFile);
  };

  const handleEditInformation = (formData) => {
    if (!id) {
      toast.error("No item selected for updating.");
      return;
    }
    updateDoctorBio({ ...formData, id });
    setSelectedAction(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (
      formData.fullname === "" ||
      formData.degree === "" ||
      formData.status === ""
    ) {
      return toast.error("Please fill all fields.");
    }
    handleEditInformation(formData);
  };

  const middle_pic = `${import.meta.env.VITE_SUPABASE_URL}${import.meta.env.VITE_SUPABASE_STORAGE_BUCKET_NAME}/`;

  return (
    <div>
      <DoctorModal
        selectedAction={selectedAction}
        handleFileChange={handleFileChange}
        setSelectedAction={setSelectedAction}
        docId={docId}
        middle_pic={middle_pic}
        handleFormSubmit={handleFormSubmit}
        BioPending={BioPending}
        handleUploadImageMiddle={handleUploadImageMiddle}
        file={file}
        updateDoctorImage={updateDoctorImage}
        isOpen={isOpen}
        doctorFullname={doctorFullname}
        doctorDegree={doctorDegree}
        doctorStatus={doctorStatus}
      />
    </div>
  );
}

export default DoctorBioToggleMenu;
