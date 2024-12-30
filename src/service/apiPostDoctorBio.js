import supabase from "./supabase";

async function apiPostDoctorBio({ fullname, status, degree }) {
  const { data: doctorBio, error } = await supabase
    .from("doctor_name")
    .insert({ fullname: fullname, status: status, degree: degree });
  if (error) throw error;
  return doctorBio;
}

export default apiPostDoctorBio;
