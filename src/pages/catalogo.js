import { React, useState } from "react";
import ListaFilmes from "../components/Filmes";
import Modal from "../components/Modal";
import "../global.css";
import CardCarousel from "../components/CardCarousel";
import comments from "../data/comentarios"; 
import movies from "../data/filmes";
import categories from "../data/categorias";
import Title from '../components/Title/index';
function Catalogo() {
  const [filmeSelecionado, setFilme] = useState(null);

  const selecionaFilme = (filme) => {
    setFilme(filme);
  };

  return (
    <main className='container'>
      
      <div className='mt-5 mb-5 col-10 offset-1 col-md-8 offset-md-2 '>    
        
        <Title title={"Assista sucessos mundiais!"} classe={'text-center m-5'}/>
        <CardCarousel categorias={categories} />
        <ListaFilmes filmes={movies} onMovieSelect={selecionaFilme} />
        
      </div>
      {filmeSelecionado && (
        <Modal filme={filmeSelecionado} comentarios={comments} />
      )}
      <div>
        <div id='carouselExample' class='carousel slide'>
          <div class='carousel-inner'>
            <div class='carousel-item'></div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='prev'>
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='next'>
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </main>
  );
}
export default Catalogo;
