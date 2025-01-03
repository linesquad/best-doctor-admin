import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import supabase from "./supabase";

export const uploadImageToSupabase = async (file) => {
  if (!file) return null;
  const imageName = `${uuidv4()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from("doctor_gallery")
    .upload(imageName, file);

  if (error) {
    console.error("Error uploading image:", error);
    toast.error("Failed to upload image.");
    return null;
  }
  return `${import.meta.env.VITE_SUPABASE_URL}${import.meta.env.VITE_SUPABASE_STORAGE_BUCKET_NAME}/${data.path}`;
};
