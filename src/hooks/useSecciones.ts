import { useEffect, useState } from "react";
import { getSecciones } from "../api/secciones";

export interface Seccion {
  id: number;
  nombre: string;
  grado_id: number;
}

export function useSecciones(gradoId?: number) {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!gradoId) {
      setSecciones([]);
      return;
    }

    async function loadSecciones() {
      setLoading(true);

      try {
        const data = await getSecciones(gradoId);
        setSecciones(data);
      } catch (error) {
        console.log(error);

        setError("No se pudieron cargar las secciones");
      } finally {
        setLoading(true);
      }
    }

    loadSecciones();
  }, [gradoId]);

  return {
    secciones,
    error,
    loading,
  };
}
