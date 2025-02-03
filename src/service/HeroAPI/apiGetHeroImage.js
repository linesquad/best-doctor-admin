import supabase from "../supabase";

export async function apiGetHeroImage() {
  let { data: personalPics, error } = await supabase
    .from("personal_pictures")
    .select("*");
  if (error) throw new Error(error.message);
  return personalPics;
}
