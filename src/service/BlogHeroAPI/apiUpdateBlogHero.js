import supabase from "../supabase";

export async function apiUpdateBlogHero({ image, subtitle, title, id }) {
  const { data, error } = await supabase
    .from("blog_pictures")
    .update({ image: image, subtitle: subtitle, title: title })
    .eq("id", id);
  if (error) throw error;

  return data;
}
