import supabase from "./supabase";

export async function apiUpdateAboutMeHeroImg({ image, id }) {
  const { data, error } = await supabase
    .from("about")
    .update({ about_image: image })
    .eq("id", id);
  if (error) throw error;

  return data;
}
