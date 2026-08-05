import SelectField from "./SelectField";

interface ModalProps {
  onClose: () => void;
}

export default function ModalBeca({ onClose }: ModalProps) {
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
              >
                <option>Seleccione...</option>
                <option>7mo</option>
                <option>8vo</option>
                <option>9no</option>
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
              >
                <option>Seleccione...</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
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
              />
            </div>
          </div>

          {/* Transporte */}

          <h3 className="mt-10 mb-5 border-b pb-3 text-lg font-semibold text-gray-800">
            Información de transporte
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <SelectField label="Número de ruta" />

            <SelectField label="Recorrido" />

            <div className="md:col-span-2">
              <SelectField label="Encargado de la ruta" />
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
