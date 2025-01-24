import supabase from "./supabase";

const apiDeleteAboutMeExperience = async (id) => {
  const { data: deleteExperience, error } = await supabase
    .from("experience")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return deleteExperience;
};

export default apiDeleteAboutMeExperience;
