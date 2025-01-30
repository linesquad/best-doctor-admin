import supabase from "../supabase";

async function apiUpdateDoctorBioImage({ middle_pic, id }) {
  const { data, error } = await supabase
    .from("personal_pictures")
    .update({ middle_pic: middle_pic })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}
export default apiUpdateDoctorBioImage;
