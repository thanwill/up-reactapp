import { useEffect, useState } from "react";
import "./modal.css";
import Comentar from "../Comentar";
import Comentarios from "../Comentarios";
import Title from "../Title";
import comentarios from "../../data/comentarios"; // importa os comentários da pasta data

function Modal({ filmeId }) {
  localStorage.setItem("comentarios", JSON.stringify(comentarios)); // se não tiver comentários no localStorage, adiciona os comentários do arquivo data/comentarios.js

  const [filmes, setFilmes] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // converte o filmeId em number
  filmeId = Number(filmeId);

  useEffect(() => {
    // fetch com https://my-json-server.typicode.com/marycamila184/movies/movies

    fetch(
      // passa a url com o filmeId para buscar o filme selecionado
      `https://my-json-server.typicode.com/marycamila184/movies/movies/${filmeId}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setFilmes(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [filmeId, options]);

  console.log(filmes);

  // lista de comentarios do filme selecionado no modal
  const [comentarioslista, setComentarioslista] = useState(() => {
    const storageComentarios = JSON.parse(localStorage.getItem("comentarios"));
    return storageComentarios || comentarios;
  });

  // adiciona um novo comentario na lista de comentarios
  const handleAddComentario = comentario => {
    setComentarioslista(prevcomentarios => [...prevcomentarios, comentario]);
    localStorage.setItem("comentarios", JSON.stringify(comentarioslista));
  };

  // remove um comentario da lista de comentarios
  const handleRemoveComentario = comentarioId => {
    setComentarioslista(prevcomentarios =>
      prevcomentarios.filter(comentario => comentario.id !== comentarioId)
    );
    localStorage.setItem("comentarios", JSON.stringify(comentarioslista));
  };

  // mostra mais ou menos da sinopse
  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <>
      {
        // verifica se o filmeId é igual ao id do filme, se for, mostra o modal
        filmeId === filmes.id && (
          <div className='modal'>
            <div className='modal-content'>
              <div className='modal-header'>
                <Title title={filmes.titulo} />
                <button className='close-button'>X</button>
              </div>
              <div className='modal-body'>
                <div className='row'>
                  <div className='col-12 col-md-4'>
                    <img
                      src={filmes.poster}
                      className='card-img-top'
                      alt='...'
                    />
                  </div>
                  <div className='col-12 col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>{filmes.titulo}</h5>
                      <p className='card-text'>
                        {showMore
                          ? filmes.sinopse
                          : filmes.sinopse.subtring(0, 100) + "..."}
                        <button
                          className='btn btn-link'
                          onClick={handleShowMore}>
                          {showMore ? "Mostrar menos" : "Mostrar mais"}
                        </button>
                      </p>
                      <p className='card-text'>
                        <small className='text-muted'>
                          {filmes.ano} - {filmes.duracao} - {filmes.genero}
                        </small>
                      </p>
                      <p className='card-text'>
                        <small className='text-muted'>
                          {filmes.assistido ? "Assistido" : "Não assistido"}
                        </small>
                      </p>
                      <p className='card-text'>
                        <small className='text-muted'>
                          Nota: {filmes.nota}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <Comentar onAddComentario={handleAddComentario} />
                <Comentarios
                  comentarios={comentarioslista}
                  onRemoveComentario={handleRemoveComentario}
                />
              </div>
            </div>
          </div>
        )
      }

      {/*
            "id": 96,
            "titulo": "Avengers: Infinity War",
            "ano": 2018,
            "poster": "https://upload.wikimedia.org/wikipedia/pt/9/90/Avengers_Infinity_War.jpg?20180316152122",
            "nota": 4.8,
            "assistido": true
       
        // verifica se o filmeId é igual ao id do filme, se for, mostra o modal
        filmeId === filmes.id && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <Title title={filmes.titulo} />
                <button className="close-button">X</button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <img

                      src={filmes.poster} 
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{filmes.titulo}</h5>
                      <p className="card-text">
                        {showMore
                          ? filmes.sinopse
                          : filmes.sinopse.substring(0, 100) + "..."}
                        <button
                          className="btn btn-link"
                          onClick={handleShowMore}
                        >
                          {showMore ? "Mostrar menos" : "Mostrar mais"}
                        </button>

                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {filmes.ano} - {filmes.duracao} - {filmes.genero}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {filmes.assistido ? "Assistido" : "Não assistido"}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Nota: {filmes.nota}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Comentar onAddComentario={handleAddComentario} />
                <Comentarios
                  comentarios={comentarioslista}
                  onRemoveComentario={handleRemoveComentario}
                />
              </div>
            </div>
          </div>
        )
        */}
    </>
  );
}
export default Modal;
