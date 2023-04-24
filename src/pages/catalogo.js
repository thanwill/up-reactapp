import { React, useState } from "react";
import ListaFilmes from "../components/CardFilmes";
import Modal from "../components/ModalFilmes";
import "../global.css";
import CardCarousel from "../components/CardCarousel";
import movies from "../data/filmes";
import Title from "../components/Title/index";
import ErrorBoundary from '../components/ErrorBoundary/index';

function Catalogo() {

 

  const [filmeSelecionado, setFilme] = useState(null);
  const selecionaFilme = filme => {
    setFilme(filme);
  };

  return (
    <ErrorBoundary>
    <main className='container'>
      <div className='mt-5 mb-5 col-10 offset-1 col-md-8 offset-md-2 '>
        <Title
          title={"Assista sucessos mundiais!"}
          classe={"text-center m-5"}
        />
        <CardCarousel/>
        <ListaFilmes filmes={movies} onMovieSelect={selecionaFilme} />
      </div>
      {filmeSelecionado && (
        <Modal filme={filmeSelecionado} />
      )}
      <div>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            <div className='carousel-item'></div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </main>
    </ErrorBoundary>
  );
}
export default Catalogo;
