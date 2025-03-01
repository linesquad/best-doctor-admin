import supabase from "../supabase";

export async function apiGetHero() {
  let { data: getHeroData, error } = await supabase
    .from("headings")
    .select("*");
  if (error) throw new Error(error.message);
  return getHeroData;
}
