import { useState } from "react";
import { useGrados } from "../hooks/useGrados";
import { useRecorridos } from "../hooks/useRecorridos";
import SelectField from "./SelectField";
import { useSecciones } from "../hooks/useSecciones";
import { useRutas } from "../hooks/useRutas";

interface ModalProps {
  onClose: () => void;
}

interface SolicitudBeca {
  nombre: string;
  cedula: string;
  grado_id?: number;
  seccion_id?: number;
  ruta_id?: number;
  recorrido_id?: number;
  lugar_residencia: string;
  condicion_sinirube: string;
  estado_beca: string;
  observaciones: string;
}

export default function ModalBeca({ onClose }: ModalProps) {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [lugarResidencia, setLugarResidencia] = useState("");

  const [condicionSinirube, setCondicionSinirube] = useState("");
  const [estadoBeca, setEstadoBeca] = useState("pendiente");

  const [observaciones, setObservaciones] = useState("");

  const { grados } = useGrados();
  const { rutas } = useRutas();

  const [gradoId, setGradoId] = useState<number>();
  const [seccionId, setSeccionId] = useState<number>();
  const [rutaId, setRutaId] = useState<number>();
  const [recorridoId, setRecorridoId] = useState<number>();

  const { secciones } = useSecciones(gradoId);
  const { recorridos } = useRecorridos(rutaId);

  const solicitud = {
    nombre,
    cedula,
    grado_id: gradoId,
    seccion_id: seccionId,
    recorrido_id: recorridoId,
    lugarResidencia,
    condicion_sinirube: condicionSinirube,
    estado_beca: estadoBeca,
    observaciones,
    ano_lectivo: new Date().getFullYear(),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-5">
          <h2 className="text-2xl font-bold text-white">
            Nueva Solicitud de Beca
          </h2>
        </div>

        {/* Body */}
        <div className="max-h-[75vh] overflow-y-auto px-8 py-6">
          <h3 className="mb-5 border-b pb-3 text-lg font-semibold text-gray-800">
            Información del estudiante
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Nombre completo
              </label>

              <input
                type="text"
                className="
            w-full rounded-xl border border-gray-300 
            bg-gray-50 px-4 py-3 text-gray-800
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Cédula
              </label>

              <input
                type="text"
                className="
            w-full rounded-xl border border-gray-300 
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Grado
              </label>

              <select
                className="
            w-full rounded-xl border border-gray-300
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
                value={gradoId ?? ""}
                onChange={(e) => {
                  const id = Number(e.target.value);

                  setGradoId(id);
                  setSeccionId(undefined);
                }}
              >
                <option value="">Seleccione un grado</option>

                {grados.map((grado) => (
                  <option key={grado.id} value={grado.id}>
                    {grado.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Sección
              </label>

              <select
                className="
            w-full rounded-xl border border-gray-300
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
                value={seccionId ?? ""}
                onChange={(e) => setSeccionId(Number(e.target.value))}
                disabled={!gradoId}
              >
                <option value="">
                  {gradoId
                    ? "Seleccione una sección"
                    : "Seleccione primero un grado"}
                </option>
                {secciones.map((seccion) => (
                  <option key={seccion.id} value={seccion.id}>
                    {seccion.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Lugar de residencia
              </label>

              <input
                type="text"
                className="
            w-full rounded-xl border border-gray-300
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
                value={lugarResidencia}
                onChange={(e) => setLugarResidencia(e.target.value)}
              />
            </div>
          </div>

          {/* Transporte */}

          <h3 className="mt-10 mb-5 border-b pb-3 text-lg font-semibold text-gray-800">
            Información de transporte
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Numero de ruta
              </label>

              <select
                className="
            w-full rounded-xl border border-gray-300
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
              >
                <option>Seleccione la seccion</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Recorrido
              </label>

              <select
                className="
            w-full rounded-xl border border-gray-300
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
              >
                <option>Seleccione la seccion</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Encargado de la ruta
                </label>

                <select
                  className="
            w-full rounded-xl border border-gray-300
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
                >
                  <option>Seleccione la seccion</option>
                </select>
              </div>
            </div>
          </div>

          {/* Beca */}

          <h3 className="mt-10 mb-5 border-b pb-3 text-lg font-semibold text-gray-800">
            Información de la beca
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <SelectField label="Condición SINIRUBE" />

            <SelectField label="Estado de la beca" />

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Observaciones
              </label>

              <textarea
                rows={4}
                className="
            w-full resize-none rounded-xl
            border border-gray-300
            bg-gray-50 px-4 py-3
            outline-none transition
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
            "
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t bg-gray-50 px-8 py-5">
          <button
            onClick={onClose}
            className="
        rounded-xl border border-gray-300
        px-6 py-3
        font-medium text-gray-700
        transition
        hover:bg-gray-200
        "
          >
            Cancelar
          </button>

          <button
            className="
        rounded-xl bg-blue-700
        px-6 py-3
        font-semibold text-white
        shadow-lg shadow-blue-200
        transition
        hover:bg-blue-800
        hover:shadow-xl
        "
          >
            Guardar solicitud
          </button>
        </div>
      </div>
    </div>
  );
}
