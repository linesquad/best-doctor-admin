import supabase from "../supabase";

export const getBlogId = async (id) => {
  let { data, error } = await supabase
    .from("doctor_blog")
    .select("*")
    .eq("id", id)
    .single();

  return { blog: data, error };
};

export const getBlog = async () => {
  let { data, error } = await supabase.from("doctor_blog").select("*");
  return { blog: data, error };
};
export const getBlogsWithPagination = async (page, itemsPerPage) => {
  const { data, error, count } = await supabase
    .from("doctor_blog")
    .select("*", { count: "exact" }) // Request exact count of rows
    .order("created_at", { ascending: false })
    .range((page - 1) * itemsPerPage, page * itemsPerPage - 1); // Correctly calculate range

  if (error) throw new Error(error.message);
  return { data: data || [], count }; // Ensure data is not undefined
};

export const AddBlog = async (blog) => {
  let { data: blogs, error } = await supabase
    .from("doctor_blog")
    .insert([blog]);
  if (error) throw new Error(error.message);
  return { blogs, error };
};

export const deleteBlogs = async (id) => {
  const { data: deleteBlog, error } = await supabase
    .from("doctor_blog")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return deleteBlog;
};

export const apiUpdateBlog = async (
  id,
  title,
  slug,
  content,
  picture,
  time
) => {
  const { data: blog, error } = await supabase
    .from("doctor_blog")
    .update({ id, title, slug, content, picture, time })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return blog;
};
