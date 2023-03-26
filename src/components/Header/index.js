/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../pages/inicio";
import Catalogo from "../../pages/catalogo";
import Erro from "../../pages/erro"
import Login from "../../pages/login";
import Planos from "../../pages/planos";

function Header() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header className='navbar navbar-expand-lg border-bottom'>
        <nav className='container'>
          <a className='navbar-brand' href='#'>
            iMoove
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto offset-4 mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  início
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/catalogo'>
                  catálogo
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  perfil
                </a>
                <ul className='dropdown-menu'>
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
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/cadastrar'>
                      Cadastrar
                    </Link>
                  </li>
                </ul>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/logar'>logar</Link>
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
        <Route path="*" element={<Erro />} />
      </Routes>
    </Router>
  );
}
export default Header;
