import React from "react";

function Inicio() {
    const imagem = './assets/image/imagem-erro.png';
  return (
    <div className="conteudo text-center pt-5">
        <img src={imagem} alt="Icone indicando moça trabalhando em um computador enquanto a página carrega." srcset="" />
        <h1 className="text-danger-emphasis">Aguarde, página em construção.</h1>
    </div>
  );
}

export default Inicio;
