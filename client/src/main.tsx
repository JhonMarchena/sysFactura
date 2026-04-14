import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "../styles/index.css";
import App from "./App.tsx";
import Login from "./login/presentation/pages/login.tsx";
import User from "./users/presentation/pages/user.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<div>Home</div>} />
      <Route path="/factura" element={<div>Factura</div>} />
      <Route path="/productos" element={<div>Productos</div>} />
      <Route path="/sucursales" element={<div>Clientes</div>} />
      <Route path="/usuarios" element={<User />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
);
