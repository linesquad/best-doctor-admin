import supabase from "./supabase";
export const apiUpdateServices = async (id, title,image) => {
  const { data: services, error } = await supabase
    .from("services")
    .update({title,image})
    .eq("id", id);
  if (error) throw new Error(error.message);
  return services
};