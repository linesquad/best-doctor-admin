import supabase from "../supabase";

export const AddBlog = async (blog) => {
  let { data: blogs, error } = await supabase.from("doctor_blog").insert([blog]);
  if (error) throw new Error(error.message);
  return { blogs, error };
};
