import { supabase } from "../supabase/supabaseClient";

export async function getRecorrido(rutaId?: number) {
  console.log("desde get", rutaId);

  const { data, error } = await supabase
    .from("recorridos")
    .select("*")
    .eq("ruta_id", rutaId)
    .order("id");

  console.log("data:", data);
  console.log("error:", error);
  if (error) throw error;

  return data;
}
