import supabase from "./supabase";

export const apiGetFooter = async () => {
  let { data, error } = await supabase.from("footer").select("*");
  if (error) throw new Error(error.message);
  return { footer: data, error };
};

export const apiUpdateFooter = async (
  id,
  text,
  phone,
  email,
  address,
  linkedin
) => {
  const { data: footer, error } = await supabase
    .from("footer")
    .update({ text, phone, email, address, linkedin })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return footer;
};

export const apiAddFooter = async (footer) => {
  let { data: footerData, error } = await supabase
    .from("footer")
    .insert([footer]);
  if (error) throw new Error(error.message);
  return { footerData, error };
};
