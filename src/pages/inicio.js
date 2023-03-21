import React from "react";
import Jogo from '../components/Jogo'

function Inicio() {
  return (
    <div className="conteudo">
      <div className="row">
        <div className="col-10 offset-1 pt-5">
        <h1 className="text-left pb-3">Vamos jogar?</h1>
        <p className="text-justify pb-3 text-left">
        Enquanto aguardamos a construção das páginas e o desenrolar das aulas, separei um jogo clássico disponível na documentação do React ilustrando algumas das funcionalidades disponibilizadas pela ferramenta. 
        </p>
        </div>
      </div>
      <Jogo/>
    </div>
  );
}

export default Inicio;
