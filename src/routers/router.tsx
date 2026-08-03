import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "../App";
import AdminPage from "../pages/AdminPage";
import DashboardPage from "../pages/DashboardPage";
import BecasPage from "../pages/BecasPage";
import NotFound404 from "../pages/NotFound404";
import LoginPage from "../auth/LoginPage";

export const RoutesTree = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="becas" element={<BecasPage />} />
      </Route>

      <Route path="*" element={<NotFound404 />} />
    </Routes>
  </BrowserRouter>
);
