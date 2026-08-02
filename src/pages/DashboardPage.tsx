export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-4 pt-4 p-4">
      {/* Solicitudes Totales */}
      <div className="rounded-2xl border border-gray-200 bg-white p-2 w-56 shadow-sm">
        <p className="px-10 text-sm font-medium text-gray-500">
          Solicitudes totales
        </p>

        <div className="mt-3 flex items-center justify-between">
          <h2 className="px-15 text-3xl font-bold text-gray-800">245</h2>
        </div>
      </div>

      {/* Aprobadas */}
      <div className="rounded-2xl border border-gray-200 bg-white p-2 w-56 shadow-sm">
        <p className="px-10 text-sm font-medium text-gray-500">Aprobadas</p>

        <div className="mt-3 flex items-center justify-between">
          <h2 className="px-15 text-3xl font-bold text-green-600">180</h2>
        </div>
      </div>

      {/* Rechazadas */}
      <div className="rounded-2xl border border-gray-200 bg-white p-2 w-56 shadow-sm">
        <p className="px-10 text-sm font-medium text-gray-500">Rechazadas</p>

        <div className="mt-3 flex items-center justify-between">
          <h2 className="px-15 text-3xl font-bold text-red-600">35</h2>
        </div>
      </div>

      {/* Pendientes */}
      <div className="rounded-2xl border border-gray-200 bg-white p-2 w-56 shadow-sm">
        <p className="px-10 text-sm font-medium text-gray-500">Pendientes</p>

        <div className="mt-3 flex items-center justify-between">
          <h2 className="px-15 text-3xl font-bold text-yellow-500">30</h2>
        </div>
      </div>
    </div>
  );
}
