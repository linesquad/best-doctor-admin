import supabase from "./supabase";

export const apiGetFooter = async () => {
  let { data, error } = await supabase.from("footer").select("*");
  return { footer: data, error };
}