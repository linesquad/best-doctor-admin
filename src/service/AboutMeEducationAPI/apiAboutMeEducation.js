import supabase from "../supabase";

export const getEducation = async () => {
  const { data, error } = await supabase.from("education").select("*");
  if (error) throw new Error(error.message);
  return { data, error };
};

export const addEducation = async (degree, from, to, uni) => {
  const { data, error } = await supabase.from("education").insert({
    degree,
    from,
    to,
    uni,
  });
  if (error) throw new Error(error.message);
  return { data, error };
};

export const updateEducation = async ({ id, degree, from, to, uni }) => {
  const { data, error } = await supabase
    .from("education")
    .update({ degree, from, to, uni })
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return { data };
};

export const deleteEducation = async (id) => {
  const { data: deleteData, error } = await supabase
    .from("education")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
  return deleteData;
};

export const getEducationById = async (id) => {
  const { data, error } = await supabase
    .from("education")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return { data };
};
