import supabase from "../supabase";

async function apiPostHeroImage({ top_pic, id }) {
  let { data, error } = await supabase
    .from("personal_pictures")
    .update({ top_pic: top_pic })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}

export default apiPostHeroImage;
