/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../pages/inicio";
import Catalogo from "../../pages/catalogo";
import Erro from "../../pages/erro";
import Login from "../../pages/login";
import Planos from "../../pages/planos";

function Header() {
  return (
    <Router>
      <header class='navbar navbar-expand-lg border-bottom'>
        <nav class='container'>
          <a class='navbar-brand' href='#'>
            iMoove
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse ' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto offset-4 mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link className='nav-link' to='/'>
                  Início
                </Link>
              </li>
              <li class='nav-item'>
                <Link className='nav-link' to='/catalogo'>
                  Catálogo
                </Link>
              </li>
              <li class='nav-item dropdown'>
                <a
                  class='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Perfil
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='/planos'>
                      Planos
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/pagamentos'>
                      Pagamentos
                    </Link>
                  </li>
                  
                  <li>
                    <Link className='dropdown-item' to='/editar'>
                      Editar
                    </Link>
                  </li>
                  <li>
                    <hr class='dropdown-divider' />
                  </li>
                  <li>
                    <Link className='dropdown-item' to='logar'>
                      Logar
                    </Link>
                  </li>
                </ul>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to=''>Cadastrar</Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </header>
      
      <div className='container text-center'></div>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/logar' element={<Login />} />
        <Route path='/planos' element={<Planos />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </Router>
  );
}
export default Header;
