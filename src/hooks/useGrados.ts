import { useEffect, useState } from "react";
import { getGrados } from "../api/grados";

export interface Grado {
  id: number;
  nombre: string;
}

export function useGrados() {
  const [grados, setGrados] = useState<Grado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGrados() {
      try {
        const data = await getGrados();
        console.log(data);

        setGrados(data);
      } catch (error) {
        console.log(error);
        setError("No fue posible cargar los grados");
      } finally {
        setLoading(false);
      }
    }

    loadGrados();
  }, []);

  return {
    grados,
    loading,
    error,
  };
}
