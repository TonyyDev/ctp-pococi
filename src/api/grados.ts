import { supabase } from "../supabase/supabaseClient";

export async function getGrados() {
  const { data, error } = await supabase.from("grados").select("*").order("id");

  if (error) throw error;

  return data;
}
