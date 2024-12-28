import supabase from "./supabase";

export const AddServices = async (serv) => {
  let { data: services, error } = await supabase.from("services").insert([serv]);
  if (error) throw new Error(error.message);
  return { services, error };
};
