import React from "react";
import Jogo from "../components/Jogo";
import "../global.css";

function Inicio() {
  return (
    <div className='conteudo '>
      <div className='row'>
        <div className='mt-5 col-10 offset-1 col-md-6 offset-md-3'>
          <h1 className='text-left'>Se liga!</h1>
          <p className='mt-5 text-left'>
            Enquanto aguardamos a construção das páginas e o desenrolar das
            aulas, separei um jogo clássico disponível na documentação do React
            ilustrando algumas das funcionalidades disponibilizadas pela
            ferramenta.
          </p>
          <div className="mt-5">
          <Jogo />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Inicio;
