import supabase from "../supabase";

export async function apiGetAboutMeExperience() {
  try {
    const { data, error } = await supabase.from("experience").select("*");
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}
