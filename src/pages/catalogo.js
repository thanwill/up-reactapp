import { React } from "react";
import ListaFilmes from "../components/CardFilmes";
import "../global.css";
import CardCarousel from "../components/CardCarousel";
import Title from "../components/Title/index";
import ErrorBoundary from "../components/ErrorBoundary/index";

function Catalogo() {


  return (
    <ErrorBoundary>
      <main className='container'>
        <div className='mt-5 mb-5 col-10 offset-1 col-md-8 offset-md-2 '>
          <Title
            title={"Assista sucessos mundiais!"}
            classe={"text-center m-5"}
          />
          <CardCarousel/>
          <ListaFilmes />
        </div>
        
      </main>
    </ErrorBoundary>
  );
}
export default Catalogo;
