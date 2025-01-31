import supabase from "../supabase"

export const deleteServices = async (id) => {
  const { data : deleteService, error} = await supabase
  .from("services")
  .delete()
  .eq("id", id)

  if(error) throw new Error(error.message)
  return deleteService
}