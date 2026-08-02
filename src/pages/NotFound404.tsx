export default function NotFound404() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-blue-900">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Página no encontrada
        </h2>

        <p className="mt-3 text-gray-500">
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>

        <div className="mt-8"></div>
      </div>
    </main>
  );
}
