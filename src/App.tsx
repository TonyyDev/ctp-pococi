import StudentThinIcon from "@iconify-react/ph/student-thin";
import EnterThinIcon from "@iconify-react/iconamoon/enter-thin";
import SearchRoundedIcon from "@iconify-react/material-symbols-light/search-rounded";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-between p-4">
        {/* Lado izquierdo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900">
            <StudentThinIcon height="3rem" color="white" />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-700">CTP - Pococí</h2>

            <h3 className="text-sm font-medium text-gray-400">
              Becas de transporte
            </h3>
          </div>
        </div>

        {/* Botón */}
        <button
          className="flex items-center gap-1 h-9 rounded-xl border border-slate-300 bg-slate-100 px-3 text-xs font-medium transition-colors hover:bg-indigo-100"
          onClick={() => navigate("admin")}
        >
          <EnterThinIcon height="2rem" />
          Acceso administrativo
        </button>
      </div>

      <div className="bg-blue-900 w-full py-15 flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-3xl font-bold text-gray-300">
            Consulta el estado de tu beca de transporte
          </span>

          <span className="text-sm font-medium text-gray-300">
            Ingresa tu número de identificación para conocer el estado actual de
            tu solicitud.
          </span>
        </div>
      </div>

      <div className="relative z-10 -mt-8 flex items-center justify-center">
        <div className="flex gap-4 rounded-xl bg-white border border-gray-300 p-6 shadow-lg ">
          <input
            className="h-9 rounded-lg border border-gray-300 px-20 shadow-lg"
            placeholder="Ej: 701240987"
          />

          <button className="flex items-center h-9 rounded-xl bg-blue-800 px-5 text-sm text-gray-300 transition-colors hover:bg-blue-500">
            <SearchRoundedIcon height="2rem" />
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
}
