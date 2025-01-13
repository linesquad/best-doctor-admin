import supabase from "./supabase";

// Function to update the experience by combining post, department, and position
export async function apiUpdateAboutMeExperience(
  id,
  post,
  department,
  position
) {
  try {
    // Combine post, department, and position into a single string or format it however you like
    const newExperience = `${post} - ${department} (${position})`;

    const { data, error } = await supabase
      .from("about")
      .update({ experience: newExperience }) // Updating the experience column with combined values
      .eq("id", id); // Use the identifier to update the correct row

    if (error) {
      throw error; // Handle any Supabase-specific error
    }
    return data; // Return the updated data
  } catch (err) {
    console.error("Error updating experience:", err); // Log the error for debugging
    return null; // Optionally return null or handle the error differently
  }
}
