import supabase from "./supabase";

async function apiGetDoctorBio() {
  const { data, error } = await supabase.from("services").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export default apiGetDoctorBio;
