import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import comentarios from "../../data/comentarios";

function Comentar({ filme }) {

  const comentariosJSON = JSON.stringify(comentarios);

  const [comentariosLS, setComentariosLS] = useState(
    JSON.parse(localStorage.getItem("comentarios"))
  );
  
  localStorage.setItem("comentarios", comentariosJSON); // se não tiver comentários no localStorage, adiciona os comentários do arquivo data/comentarios.js

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newComment = {
      id: comentariosLS.length + 1,
      filmeId: filme.id,
      nome: name,
      comentario: comment,
    };

    const updatedComments = [...comentariosLS, newComment]; // cria uma cópia do array de comentários e adiciona o novo comentário
    setComentariosLS(updatedComments); // atualiza o estado com o novo comentário
    localStorage.setItem("comentarios", JSON.stringify(updatedComments)); // atualiza o localStorage com o novo comentário

    setName("");
    setComment("");
    
  }


  return (
    <Form
      onSubmit={handleSubmit}
      className='col-10 offset-1 col-md-10 offset-md-1'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type='text'
          placeholder='Digite seu nome'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Comentário</Form.Label>
        <Form.Control
          type='text'
          placeholder='Digite seu comentário'
          value={comment}
          onChange={event => setComment(event.target.value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Enviar
      </Button>
    </Form>
  );
}

export default Comentar;
