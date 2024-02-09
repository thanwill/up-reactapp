import React from "react";
import Title from "../components/Title";

function Inicio() {
    const imagem = './assets/image/imagem-erro.png';
  return (
    <div className="text-center pt-5">
        <img src={imagem} alt="Icone indicando moça trabalhando em um computador enquanto a página carrega." srcset="" />
        <Title title={'Aguarde, página em construção...'} classe={'text-center m-5'}/>
    </div>
  );
}

export default Inicio;
