import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import Inicio from "./pages/inicio";
import Catalogo from "./pages/catalogo";
import Erro from "./pages/erro.js";
import Login from "./pages/login";
import Planos from "./pages/planos";
import ConfigRoutes from "./ConfigRoutes"

function App() {
  return (
    <div className='container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />        
        <ConfigRoutes/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
