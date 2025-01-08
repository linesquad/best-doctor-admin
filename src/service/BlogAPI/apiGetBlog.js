import supabase from "../supabase";

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
