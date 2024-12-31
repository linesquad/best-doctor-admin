import supabase from "./supabase";
export const apiUpdateServices = async (id, title) => {
  const { data: services, error } = await supabase
    .from("services")
    .update({title})
    .eq("id", id);
  if (error) throw new Error(error.message);
  return services
};