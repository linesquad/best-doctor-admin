import supabase from "../supabase"

export const UpdateBanner = async (id,desc) => {
  let {data: description,error} = await supabase.from("banner").update({ description: desc }).eq("id", id);
  if (error) throw new Error(error.message);
  return { description, error };
}