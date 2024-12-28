import supabase from "./supabase";

async function apiUpdateDoctorBio({ fullName, status, degree, id }) {
  const { data: doctorBio, error } = await supabase
    .from("doctor_name")
    .update({ fullname: fullName, status: status, degree: degree })
    .eq("id", id);
  if (error) throw error;
  return doctorBio;
}

export default apiUpdateDoctorBio;
