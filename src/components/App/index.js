/* eslint-disable no-unused-vars */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const conhecer = 'Saiba mais'

  const filmes = [
    {
      'nome':'',
      'diretor':'',
      'anoLancamento':2019,
      'generos':['comédia','drama','ação'],
      'produtora':''
    }
  ]

  return (
    <div class='container text-center col-xs-10 col-md-10 col-lg-10'>
      <div class='row align-items-start'>
        <div class='col'>
          <div class='card'>
            <img src='./assets/image/7.png' class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                <span class='placeholder col-12 placeholder-sm'></span>
                <span class='placeholder col-12'></span>
                <span class='placeholder col-12 placeholder-sm'></span>
                <span class='placeholder col-12 placeholder-sm'></span>
              </p>
              <a href='html' class='btn btn-primary'>
              {conhecer}
              </a>
            </div>
          </div>
        </div>
        <div class='col'>
          <div class='card'>
            <img src='./assets/image/6.png' class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                <span class='placeholder col-12 placeholder-sm'></span>
                <span class='placeholder col-12'></span>
                <span class='placeholder col-12 placeholder-sm'></span>
                <span class='placeholder col-12 placeholder-sm'></span>
              </p>
              <a href='html' class='btn btn-primary'>
              {conhecer}
              </a>
            </div>
          </div>
        </div>
        <div class='col'>
          <div class='card'>
            <img src='./assets/image/5.png' class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                <span class='placeholder col-12 placeholder-sm'></span>
                <span class='placeholder col-12'></span>
                <span class='placeholder col-12 placeholder-sm'></span>
                <span class='placeholder col-12 placeholder-sm'></span>
              </p>
              <a href='html' class='btn btn-primary'>
                {conhecer}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
