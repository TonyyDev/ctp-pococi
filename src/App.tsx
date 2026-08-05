import { useState } from "react";

import StudentThinIcon from "@iconify-react/ph/student-thin";
import EnterThinIcon from "@iconify-react/iconamoon/enter-thin";
import SearchRoundedIcon from "@iconify-react/material-symbols-light/search-rounded";
import { useNavigate } from "react-router";
import { supabase } from "./supabase/supabaseClient";

export default function App() {
  const navigate = useNavigate();

  const [cedula, setCedula] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  async function consultarBeca() {
    if (!cedula) {
      setMensaje("Ingrese su número de cédula");
      return;
    }

    try {
      setLoading(true);
      setMensaje("");

      const { data, error } = await supabase.rpc("consultar_estado_beca", {
        p_cedula: cedula,
      });

      if (error) {
        console.error(error);
        setMensaje("Ocurrió un error al consultar");
        return;
      }

      if (!data || data.length === 0) {
        setResultado(null);
        setMensaje("No se encontró ninguna solicitud");
        return;
      }

      setResultado(data[0]);
    } catch (error) {
      console.error(error);
      setMensaje("Error inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-between p-4">
        {/* Lado izquierdo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900">
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
          className="flex h-9 items-center gap-1 rounded-xl border border-slate-300 bg-slate-100 px-3 text-xs font-medium transition-colors hover:bg-indigo-100"
          onClick={() => navigate("/login")}
        >
          <EnterThinIcon height="2rem" />
          Acceso administrativo
        </button>
      </div>

      <div className="flex w-full items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 p-4 py-15">
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

      <div className="relative z-10 -mt-8 flex flex-col items-center justify-center">
        {/* Contenedor principal */}
        <div className="flex w-full max-w-xl flex-col rounded-xl border border-gray-300 bg-white p-6 shadow-lg">
          {/* Input y botón */}
          <div className="flex gap-3">
            <input
              className="h-9 flex-1 rounded-lg border border-gray-300 px-4 shadow-sm outline-none focus:border-blue-500"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="Ej: 701240987"
            />

            <button
              className="flex h-9 items-center gap-1 rounded-xl bg-blue-700 px-5 text-sm text-gray-300 transition-colors hover:bg-blue-500"
              onClick={consultarBeca}
            >
              <SearchRoundedIcon height="2rem" />
              Consultar
            </button>
          </div>

          {/* Mensaje de error */}
          {mensaje && (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
              {mensaje}
            </div>
          )}

          {/* Resultado */}
          {resultado && (
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              {/* Encabezado */}
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-xl font-semibold text-slate-800">
                  Estado de la beca
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Consulta de información académica
                </p>
              </div>

              {/* Información */}
              <div className="space-y-6 px-6 py-6">
                {/* Primera fila */}
                <div className="flex items-start justify-between">
                  {/* Estudiante */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Estudiante
                    </p>

                    <p className="mt-1 text-lg font-semibold text-slate-800">
                      {resultado.nombre}
                    </p>
                  </div>

                  {/* Estado */}
                  <div className="text-right">
                    <p className="text-xs font-semibold tracking-wide text-slate-500">
                      Estado de la beca
                    </p>

                    <span
                      className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        resultado.estado_beca.toLowerCase() === "Aprobada"
                          ? "bg-emerald-100 text-emerald-700"
                          : resultado.estado_beca.toLowerCase() === "Rechazada"
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {resultado.estado_beca}
                    </span>
                  </div>
                </div>

                {/* Segunda fila */}
                <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-5">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate-500">
                      Año lectivo
                    </p>

                    <p className="mt-1 font-medium text-slate-800">
                      {resultado.ano_lectivo}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate-500">
                      Última actualización
                    </p>

                    <p className="mt-1 font-medium text-slate-800">
                      {new Date(resultado.ultima_actualizacion).toLocaleString(
                        "es-CR",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour12: true,
                        },
                      )}
                    </p>
                  </div>
                </div>

                {/* Mensaje según el estado */}
                {resultado.estado_beca.toLowerCase() === "pendiente" && (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                    <span className="font-semibold">
                      Solicitud en revisión.
                    </span>{" "}
                    Su solicitud de beca de transporte está en revisión. Le
                    notificaremos cuando haya una resolución.
                  </div>
                )}
              </div>

              {/* Pie */}
              <div className="bg-slate-50 px-6 py-3 text-center text-xs text-slate-500">
                Información oficial del sistema de becas
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
