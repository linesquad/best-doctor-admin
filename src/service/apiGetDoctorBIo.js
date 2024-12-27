import supabase from "./supabase";

async function apiGetDoctorBio() {
  const { data, error } = await supabase.from("service").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export default apiGetDoctorBio;
