import supabase from "./supabase";

export async function apiAddAboutMeExperience(
  dateTo,
  dateFrom,
  place,
  department,
  position
) {
  try {
    const { data, error } = await supabase
      .from("experience") // Assuming the table is named 'experience'
      .insert({
        place,
        department,
        from: dateFrom,
        to: dateTo,
        position,
      });

    if (error) {
      throw error; // Handle the error
    }
    return data; // Return the inserted data
  } catch (err) {
    console.error("Error adding experience:", err);
    return null; // Optionally handle the error and return null
  }
}
