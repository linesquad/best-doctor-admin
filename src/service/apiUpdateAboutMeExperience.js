
import supabase from "./supabase";


export async function apiUpdateAboutMeExperience({
  place,
  department,
  dateTo,
  dateFrom,
  position,
  id,
}) {
  const { data, error } = await supabase
    .from("experience")
    .update({ place, department, dateTo, dateFrom, position })
    .eq("id", id)
    .single();
  if (error) throw error;

  return data;
}




