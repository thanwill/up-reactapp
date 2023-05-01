import React, { useState, useEffect } from "react";
import "../../global.css";

const ListaFilmes = ({ onMovieSelect }) => {

  const [filmes, setFilmes] = useState([]);
  
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    // fetch com https://my-json-server.typicode.com/marycamila184/movies/movies

    fetch(
      "https://my-json-server.typicode.com/marycamila184/movies/movies",
      options
    )
      .then(response => response.json())
      .then(response => {
        setFilmes(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <div>
      <div className='row'>
        {/*
            "id": 96,
            "titulo": "Avengers: Infinity War",
            "ano": 2018,
            "poster": "https://upload.wikimedia.org/wikipedia/pt/9/90/Avengers_Infinity_War.jpg?20180316152122",
            "nota": 4.8,
            "assistido": true
        */}
        {filmes.map(filme => (
          <div className='col-12 col-md-4 mt-5' key={filme.id}>
            <div className='card'>
              <img src={filme.poster} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{filme.titulo}</h5>
                <button
                  onClick={() => onMovieSelect(filme.id)}
                  type='button'
                  className='btn btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#staticBackdrop'>
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListaFilmes;
