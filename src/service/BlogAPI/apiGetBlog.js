import supabase from "../supabase";

export const getBlog = async () => {
  let { data: blog, error } = await supabase.from("doctor_blog").select("*");
  console.log(blog);
  
  return { blog, error };
};