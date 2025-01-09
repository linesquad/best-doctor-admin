import supabase from "./supabase";

export const getBlog = async (id) => {
  if (id) {
    let { data, error } = await supabase
      .from("doctor_blog")
      .select("*")
      .eq("id", id)
      .single();
    return { blog: data, error };
  } else {
    let { data, error } = await supabase.from("doctor_blog").select("*");
    return { blog: data, error };
  }
};

export const AddBlog = async (blog) => {
  let { data: blogs, error } = await supabase.from("doctor_blog").insert([blog]);
  if (error) throw new Error(error.message);
  return { blogs, error };
};

export const deleteBlogs = async (id) => {
  const { data : deleteBlog, error} = await supabase
  .from("doctor_blog")
  .delete()
  .eq("id", id)

  if(error) throw new Error(error.message)
  return deleteBlog
}