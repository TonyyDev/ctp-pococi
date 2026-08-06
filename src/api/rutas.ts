import { supabase } from "../supabase/supabaseClient";

export async function getRutas() {
  const { data, error } = await supabase.from("rutas").select("*").order("id");

  if (error) throw error;

  return data;
}
