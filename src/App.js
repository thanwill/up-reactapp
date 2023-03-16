import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/inicio";
import Catalogo from "./pages/catalogo";

function App() {
  return (
    <div className='container'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/catalogo' element={<Catalogo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
