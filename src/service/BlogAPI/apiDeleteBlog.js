import supabase from "../supabase"

export const deleteBlogs = async (id) => {
  const { data : deleteBlog, error} = await supabase
  .from("doctor_blog")
  .delete()
  .eq("id", id)

  if(error) throw new Error(error.message)
  return deleteBlog
}