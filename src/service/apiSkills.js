import supabase from "./supabase";

export const getSkills = async () => {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) throw new Error(error.message);
  return { skill: data, error };
};

export const addSkills = async (skills) => {
  const { data, error } = await supabase.from("skills").insert([skills]);
  if (error) throw new Error(error.message);
  return { skill: data, error };
};
  