import StudentThinIcon from "@iconify-react/ph/student-thin";
import EnterThinIcon from "@iconify-react/iconamoon/enter-thin";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/supabaseClient";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    console.log("deslogueado");
    navigate("/", { replace: true });
  };

  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        {/* Lado izquierdo */}
        <div className="flex items-center gap-3 ">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900">
            <StudentThinIcon height="3rem" color="white" />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-700">
              Panel administrativo
            </h2>

            <h3 className="text-sm font-medium text-gray-400">
              Becas de Transporte — CTP Pococí
            </h3>
          </div>
        </div>

        {/* Botón */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-400">
            phanton85@gmail.com
          </span>
          <button
            className="flex items-center gap-1 h-7 rounded-lg border border-slate-300 bg-slate-100 px-3 text-xs font-medium transition-colors hover:bg-indigo-100"
            onClick={logout}
          >
            <EnterThinIcon height="24px" />
            Salir
          </button>
        </div>
      </div>
    </div>
  );
}
