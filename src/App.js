import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Catalogo from "./pages/catalogo";
import Erro from "./pages/erro.js";
import Login from "./pages/login";
import Planos from "./pages/planos";

function App() {
  return (
    <div className='container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />        
        <Routes>
          <Route path='/' element={<Catalogo />} />
          <Route path='/jogos' element={<Inicio />} />
          <Route path='/logar' element={<Login />} />
          <Route path='/planos' element={<Planos />} />
          <Route path='*' element={ <Erro /> } />          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
