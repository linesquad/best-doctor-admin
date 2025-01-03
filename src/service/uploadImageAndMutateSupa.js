import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import { uploadImageInSupa } from "./uploadImageInSupa";

export const handleUploadImageMiddle = async (
  file,
  updateDoctorImage,
  cancelModal,
  id,
  picture
) => {
  if (!file) {
    toast.error("No file selected.");
    return;
  }
  const imageName = `${uuidv4()}_${file.name}`;
  const uploadData = await uploadImageInSupa(file, imageName);

  const mutateImage = `${picture}/${uploadData.path}`;

  updateDoctorImage({ middle_pic: mutateImage, id: id });
  toast.success("Image uploaded successfully.");
  cancelModal(null);
};

export const handleUploadImageTop = async (
  file,
  updateDoctorImage,
  cancelModal,
  id,
  picture
) => {
  if (!file) {
    toast.error("No file selected.");
    return;
  }
  const imageName = `${uuidv4()}_${file.name}`;
  const uploadData = await uploadImageInSupa(file, imageName);

  const mutateImage = `${picture}/${uploadData.path}`;

  updateDoctorImage({ top_pic: mutateImage, id: id });
  toast.success("Image uploaded successfully.");
  cancelModal(null);
};
