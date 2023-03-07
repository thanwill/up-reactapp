/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
function Header() {
  return (
    <div className='navegacao'>
      <nav class='navbar navbar-expand-lg bg-body-tertiary'>
        <div class='container-fluid'>
          <a class='navbar-brand' href=''>
            Catálogo
          </a>
          <div class='collapse navbar-collapse' id='navbarText'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#'>
                  Início
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Lançamentos
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Assinatura
                </a>
              </li>
            </ul>
          </div>
          <form class='d-flex ' role='search'>
            <input
              class='form-control me-2'
              type='search'
              placeholder='Pesquisar'
              aria-label='Search'
            />
            <button class='btn btn-outline-success' type='submit'>
              Pesquisar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
export default Header;
