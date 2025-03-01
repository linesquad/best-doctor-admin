import supabase from "../supabase";

export async function apiGetBookings() {
  const { data, error } = await supabase.from("booking").select("*");
  
  if (error) {
    throw error;
  }
  return data;
}
export async function apiGetBookingsByDate(date) {
  const { data, error } = await supabase.from("booking").select("*").eq("date", date).range(0,2).order('created_at', { ascending: false });

  if (error) {
    throw error;
  }
  return data;
}

export const getTimesById = async (id) => {
  const { data, error } = await supabase
    .from("days_of_week")
    .select("*")
    .eq("id", id);

  if (error) throw new Error(error.message);

  return data;
};

export const getBookingById = async (id) => {
  let { data, error } = await supabase
    .from("booking")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
};
