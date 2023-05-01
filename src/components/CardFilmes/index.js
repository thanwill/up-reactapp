import { Button, Modal, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../global.css";

const ListaFilmes = () => {
  const [filmes, setFilmes] = useState([]);

  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch com https://my-json-server.typicode.com/marycamila184/movies/movies

    fetch(
      "https://my-json-server.typicode.com/marycamila184/movies/movies",
      options
    )
      .then(response => response.json())
      .then(response => {
        // gera um atraso de 3 segunos na coleta dos dados
        setTimeout(() => {
          setIsLoading(false);
          setFilmes(response);
        }, 3000);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const [filmeSelecionado, setFilmeSelecionado] = useState({});
  const [assistido, setAssistido] = useState(filmeSelecionado.assistido);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  const [naoAssistidos, setNaoAssistidos] = useState(false);

  function handleSwitchChange() {
    setNaoAssistidos(!naoAssistidos);
  }

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/marycamila184/movies/movies/${filmeSelecionado.id}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setFilmeSelecionado(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <Form className='d-flex mt-5'>
            <Form.Control
              type='search'
              placeholder='Busque pelo título'
              className='me-2'
              aria-label='Search'
              value={searchTerm}
              onChange={handleSearch}
            />
            {/*
              <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch1">
              <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
            </div>
               */}

            <div className='custom-control custom-switch'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='switchAssistidos'
                onChange={handleSwitchChange}
              />
              <label
                className='custom-control-label'
                htmlFor='switchAssistidos'>
                {naoAssistidos ? "Não assistidos" : "Todos"}
              </label>
            </div>
          </Form>
        </div>
      </div>
      <div className='row'>
        {isLoading ? (
          <div class='d-flex justify-content-center mt-5'>
            <div class='spinner-border' role='status'>
              <span class='sr-only'>Loading...</span>
            </div>
          </div>
        ) : filmes.length > 0 ? (
          filmes
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
            .filter(filme =>
              filme.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            )
            
            .map(filme => (
              <div className='col-12 col-md-4 mt-5' key={filme.id}>
                <div className='card'>
                  <img src={filme.poster} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title'>{filme.titulo}</h5>
                    <Button
                      variant='primary'
                      onClick={() => {
                        handleShow();
                        setFilmeSelecionado(filme);
                      }}>
                      Detalhes
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop='static'
                      keyboard={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>{filmeSelecionado.titulo}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className='row'>
                          <div className='col-12 col-md-4'></div>
                          <div className='col-12 col-md-8'>
                            <p>
                              <strong>Ano:</strong> {filmeSelecionado.ano}
                            </p>
                            <p>
                              <strong>Nota:</strong> {filmeSelecionado.nota}
                            </p>
                            <p>
                              <strong>Assistido:</strong>
                              {filmeSelecionado.assistido ? "Sim" : "Não"}
                              <Button
                                variant='primary'
                                onClick={() => {
                                  setAssistido(!assistido);
                                }}>
                                {assistido ? "Asssitir" : "Não assistio"}
                              </Button>
                            </p>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                          Fechar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className='col-12 col-md-4 mt-5'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Não foram encontrados filmes.</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListaFilmes;
