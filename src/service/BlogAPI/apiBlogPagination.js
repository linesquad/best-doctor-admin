import supabase from "../supabase";

async function apiBlogPagination({ start, end }) {
  const { data, error } = await supabase
    .from("doctor_blog")
    .select("*")
    .range(start, end);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default apiBlogPagination;
