import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import AdminPage from "./pages/AdminPage";
import { RoutesTree } from "./routers/router";
//import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RoutesTree />
  </StrictMode>,
);
