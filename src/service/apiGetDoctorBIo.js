import supabase from "./supabase";

async function apiGetDoctorBio() {
  const { data, error } = await supabase.from("doctor_name").select("*");
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export default apiGetDoctorBio;
