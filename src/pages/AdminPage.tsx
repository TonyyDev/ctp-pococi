import { NavLink, Outlet } from "react-router";
import AdminLayout from "../layout/AdminLayout";
import DashboardOutlineIcon from "@iconify-react/material-symbols-light/dashboard-outline";
import UsersIcon from "@iconify-react/mynaui/users";

export default function AdminPage() {
  return (
    <div className="bg-slate-200 h-screen">
      <AdminLayout />
      <nav className="flex gap-4 py-10 p-6 font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 py-2 h-10 rounded-lg bg-blue-700 text-white font-semibold shadow-lg"
              : "flex items-center px-4 py-2 h-10 rounded-lg bg-gray-100 hover:bg-indigo-200"
          }
          to="dashboard"
        >
          <DashboardOutlineIcon height="2rem" />
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 py-2 h-10 rounded-lg bg-blue-700 text-white font-semibold shadow-lg"
              : "flex items-center px-4 py-2 h-10 rounded-lg bg-gray-100 hover:bg-indigo-200"
          }
          to="becas"
        >
          <UsersIcon height="2em" />
          Becas
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
