import supabase from "./supabase";
export async function apiGetBlogHero() {
  const { data, error } = await supabase.from("blog_pictures").select("*");
  if (error) throw error;
  return data;
}
