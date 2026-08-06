import { supabase } from "../supabase/supabaseClient";

export async function getSecciones(gradoId?: number) {
  const { data, error } = await supabase
    .from("secciones")
    .select("*")
    .eq("grado_id", gradoId);

  if (error) throw error;

  return data;
}
