/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  
  return (
    <header className='mt-3 navbar navbar-expand-lg border-bottom'>
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
              <Link className='nav-link' to='/planos'>
                planos
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                sobre
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <Link className='dropdown-item' to='/pagamentos'>
                    pagamentos
                  </Link>
                </li>

                <li>
                  <Link className='dropdown-item' to='/editar'>
                    editar
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' to='/jogos'>
                    jogos
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/logar'>
                entrar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
