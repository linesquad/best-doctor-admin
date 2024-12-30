import supabase from "./supabase";

async function apiGetDoctorBioImage() {
  const { data, error } = await supabase.from("personal_pictures").select("*");
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export default apiGetDoctorBioImage;
