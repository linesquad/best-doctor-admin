import supabase from "./supabase";

// Function to update the experience by combining post, department, and position
export async function apiAddAboutMeExperience(
  id,
  dateTo,
  dateFrom,
  place,
  department,
  position
) {
  try {
    const newExperience = `${place} - ${department}-(${dateFrom} -${dateTo}) (${position})`;

// TODO: ეს უნდა შეიცვალოს!

    const { data, error } = await supabase
      .from("about")
      .insert({ experience: newExperience })
      .eq("id", id);

    if (error) {
      throw error; // Handle any Supabase-specific error
    }
    return data;
  } catch (err) {
    console.error("Error updating experience:", err);
  }
}
