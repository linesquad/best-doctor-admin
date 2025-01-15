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

export const updateSkill = async (id, skill, description) => {
  const { data, error } = await supabase
    .from("skills")
    .update({ id, skill, description })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return { skill: data, error };
};


export const deleteSkill = async (id) => {
  const { data: deleteData, error } = await supabase
    .from("skills")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
  return deleteData
};

