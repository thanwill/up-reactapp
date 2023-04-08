import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/jogos";
import Catalogo from "./pages/catalogo";
import Erro from "./pages/erro.js";
import Login from "./pages/login";
import Planos from "./pages/planos";

export default function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalogo />} />
      <Route path="/jogos" element={<Inicio />} />
      <Route path="/logar" element={<Login />} />
      <Route path="/planos" element={<Planos />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}
