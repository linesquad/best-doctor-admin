import supabase from "./supabase";

export const getPatients = async () => {
  const { data, error } = await supabase.from("booking").select("*");
  if (error) throw new Error(error.message);
  return { patient: data, error };
};

export const updatePatients = async (id, status) => {
  const { data, error } = await supabase
    .from("booking")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return { data, error };
};

export const patientsPagination = async ({ start, end }) => {
  const { data, error, count } = await supabase
    .from("booking")
    .select("*", { count: 'exact' })
    .range(start, end);

  if (error) {
    throw new Error(error.message);
  }
  return { data, count };
}
