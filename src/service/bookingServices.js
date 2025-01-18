import supabase from "./supabase";

export async function apiGetBookings() {
  const { data, error } = await supabase.from("booking").select("*");
  if (error) {
    throw error;
  }
  return data;
}
