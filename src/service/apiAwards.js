import supabase from "./supabase";

export const getAwards = async () => {
  const { data, error } = await supabase.from("awards").select("*");
  if (error) throw new Error(error.message);
  return { award: data, error };
};

export const addAwards = async (awards) => {
  const { data, error } = await supabase.from("awards").insert([awards]);
  if (error) throw new Error(error.message);
  return {award: data, error};
};

export const updateAwards = async (id, name, date, awardedBy) => {
  const { data, error } = await supabase
    .from("awards")
    .update({ id, name, date, awardedBy })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return { award: data, error };
};

export const deleteAwards = async (id) => {
  const { data: deleteData, error } = await supabase
    .from("awards")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
  return deleteData;
};
