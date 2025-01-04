import { useState } from "react";
import { toast } from "react-toastify";

import DoctorBioForm from "./DoctorBioForm";
import useUpdateDoctorBio from "../../../hooks/useUpdateDoctorBio";
import useUpdateDoctorBioImage from "../../../hooks/useUpdateDoctorBioImage";
import { handleUploadImageMiddle } from "../../../service/uploadImageAndMutateSupa";

function DoctorBioToggleMenu({ isOpen, id, docId }) {
  const [selectedAction, setSelectedAction] = useState(null);
  const [file, setFile] = useState(null);

  const { mutate: updateDoctorBio } = useUpdateDoctorBio();
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
    handleEditInformation(formData);
  };

  const middle_pic = `${import.meta.env.VITE_SUPABASE_URL}${import.meta.env.VITE_SUPABASE_STORAGE_BUCKET_NAME}/`;

  return (
    <div>
      {isOpen && (
        <div className="flex flex-col gap-3 bg-[#396cc333] p-4 text-[#000] w-[200px] max-w-full border border-[#E0E0E0] shadow-lg rounded-lg font-poppinsSemiBold text-[14px]">
          <h1
            onClick={() => setSelectedAction("edit")}
            className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]"
          >
            Edit Information
          </h1>
          <h1
            onClick={() => setSelectedAction("upload")}
            className="cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out border-b pb-3 border-[#007BFF] hover:text-[#007BFF]"
          >
            Upload Image
          </h1>
        </div>
      )}
      {selectedAction && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
            <h2 className="text-xl font-bold mb-4 text-center">
              {selectedAction === "edit" ? "Edit Information" : "Upload Image"}
            </h2>
            {selectedAction === "upload" ? (
              <div className="flex flex-col gap-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                />
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedAction(null)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      handleUploadImageMiddle(
                        file,
                        updateDoctorImage,
                        setSelectedAction,
                        docId,
                        middle_pic
                      )
                    }
                    className="px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <DoctorBioForm
                onSubmit={handleFormSubmit}
                onCancel={() => setSelectedAction(null)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorBioToggleMenu;
