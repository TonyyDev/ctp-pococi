import { useEffect, useState } from "react";
import { getSecciones } from "../api/secciones";
import { getRecorrido } from "../api/recorridos";

export interface Recorrido {
  id: number;
  nombre: string;
  ruta_id: number;
}

export function useRecorridos(rutaId?: number) {
  console.log("rutaid desde useRecorrido", rutaId);

  const [recorridos, setRecorridos] = useState<Recorrido[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRecorridos() {
      setLoading(true);

      if (!rutaId) {
        setRecorridos([]);
        return;
      }

      try {
        const data = await getRecorrido(rutaId);
        setRecorridos(data);
      } catch (error) {
        console.log(error);
        setError("No se pudieron cargar las secciones");
      } finally {
        setLoading(false);
      }
    }

    loadRecorridos();
  }, [rutaId]);

  return {
    recorridos,
    loading,
    error,
  };
}
