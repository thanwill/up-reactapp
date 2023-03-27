import React from "react";
import Jogo from "../components/Jogo";
import "../global.css";
import Title from "../components/Title";

function Inicio() {
  return (
    <div className='conteudo '>
      <div className='row'>
        <div className='mt-5 col-10 offset-1 col-md-6 offset-md-3'>
          <div className='mt-5'>
            <Title title={"Se liga"} 
            text={"Olá! Seja bem-vindo ao nosso jogo em desenvolvimento. Gostaria de informar que ainda estamos trabalhando nas páginas finais, mas para que você possa aproveitar um pouco do que temos até agora, preparamos uma versão demo para você jogar. Esperamos que goste e agradecemos a sua compreensão enquanto finalizamos o restante do jogo. Aproveite!"}
            />           
            <Jogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
