import supabase from "./supabase";

export const getPatients = async () => {
  const { data, error } = await supabase.from("booking").select("*");
  if (error) throw new Error(error.message);
  return { patient: data, error };
};