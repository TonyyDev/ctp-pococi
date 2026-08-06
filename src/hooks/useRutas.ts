import { useEffect, useState } from "react";
import { getRutas } from "../api/rutas";

export interface Ruta {
  id: number;
  numero_ruta: string;
}

export function useRutas() {
  const [rutas, setRutas] = useState<Ruta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRutas() {
      try {
        const data = await getRutas();
        setRutas(data);
      } catch (error) {
        console.log(error);
        setError("No se pudieron cargar las rutas");
      } finally {
        setLoading(false);
      }
    }

    loadRutas();
  }, []);

  return {
    rutas,
    loading,
    error,
  };
}
