import supabase from "./supabase";

async function apiPostHeroImage(top_pic) {
  let { data, error } = await supabase.from("headings").insert({ top_pic });
  if (error) throw new Error(error.message);
  return data;
}

export default apiPostHeroImage;
