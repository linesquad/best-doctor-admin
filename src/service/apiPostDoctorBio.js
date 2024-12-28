import supabase from "./supabase";

async function apiPostDoctorBio({ fullName, status, degree }) {
  const { data: doctorBio, error } = await supabase
    .from("doctor_name")
    .insert({ fullname: fullName, status: status, degree: degree });
  if (error) throw error;
  return doctorBio;
}

export default apiPostDoctorBio;
