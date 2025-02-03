import supabase from "../supabase";

export const getServicesId = async (id) => {
  let { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  return { service: data, error };
};