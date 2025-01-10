import { toast } from "react-toastify";

import supabase from "./supabase";

export const uploadImageInSupa = async (file, imageName) => {
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("doctor_gallery")
    .upload(imageName, file);
  if (uploadError) {
    console.error("Error uploading image:", uploadError);
    toast.error("Failed to upload image.");
    return;
  }
  
  return uploadData;
};
