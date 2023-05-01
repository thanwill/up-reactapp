import { useEffect, useState } from "react";

export default function FilmesApi() {
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
  }, []);

  return (
    <div>
      <h1>Filmes Api</h1>
      {/*
            "id": 96,
            "titulo": "Avengers: Infinity War",
            "ano": 2018,
            "poster": "https://upload.wikimedia.org/wikipedia/pt/9/90/Avengers_Infinity_War.jpg?20180316152122",
            "nota": 4.8,
            "assistido": true
        */}
      {filmes.map(filme => (
        <div key={filme.id}>
            <h2>{filme.titulo}</h2>
            <p>{filme.ano}</p>
            <img src={filme.poster} alt={filme.titulo} />
            <p>{filme.nota}</p>
            <p>{filme.assistido ? "Assistido" : "Não assistido"}</p>
        </div>
      ))}
    </div>
  );
}
