import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/jogos";
import Catalogo from "./pages/catalogo";
import Erro from "./pages/erro.js";
import Login from "./pages/login";
import Planos from "./pages/planos";
import Cadastrar from "./pages/cadastro";
import Servidor from "./pages/request";
import FilmesApi from './components/FilmesApi/index';

export default function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalogo />} />
      <Route path="/jogos" element={<Inicio />} />
      <Route path="/logar" element={<Login />} />
      <Route path="/planos" element={<Planos />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/requisicao" element={<Servidor />} />
      <Route path="/api" element={<FilmesApi />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}
