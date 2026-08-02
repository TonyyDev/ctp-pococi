import SearchRoundedIcon from "@iconify-react/material-symbols-light/search-rounded";

export default function BecasPage() {
  return (
    <div className="px-4">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        {/* Título */}
        <div className="flex items-center justify-between ">
          <span className="mb-6 text-2xl font-bold text-gray-800">
            Gestión de Becas
          </span>
          <button className="flex items-center h-9 rounded-xl bg-blue-900 px-5 text-sm text-gray-300 transition-colors hover:bg-blue-500">
            + Nueva solicitud
          </button>
        </div>

        {/* Controles */}
        <div className="flex items-end gap-4">
          {/* Input */}
          <div className="flex flex-col">
            <div className="relative">
              <SearchRoundedIcon
                className="absolute left-3 top-5 h-4 w-4 -translate-y-1/2 text-gray-500"
                height="2rem"
              />
            </div>
            <input
              type="text"
              placeholder="Buscar por identificacion"
              className="h-10 px-10 rounded-lg border border-gray-300 w-2xl focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Select 1 */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Año lectivo
            </label>
            <select className="h-10 rounded-lg border border-gray-300 px-3 focus:border-blue-500 focus:outline-none">
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>

          {/* Select 2 */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Estado
            </label>
            <select className="h-10 rounded-lg border border-gray-300 px-3 focus:border-blue-500 focus:outline-none">
              <option>Todos</option>
              <option>Aprobada</option>
              <option>Pendiente</option>
              <option>Rechazada</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
