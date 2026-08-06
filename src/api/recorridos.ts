import { supabase } from "../supabase/supabaseClient";

export async function getSecciones() {
  const { data, error } = await supabase
    .from("recorridos")
    .select("*")
    .order("id");

  if (error) throw error;

  return data;
}
