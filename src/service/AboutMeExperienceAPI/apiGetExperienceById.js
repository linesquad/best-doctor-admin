import supabase from "../supabase";

export const apiGetExperienceById = async (id) => {
  let { data, error } = await supabase
    .from("experience")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return { data };
};
