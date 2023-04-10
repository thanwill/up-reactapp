import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import comentarios from "../../data/comentarios";

export default function Comentar({ filme }) {

  const comentariosJSON = JSON.stringify(comentarios);
  const [comentariosLS, setComentariosLS] = useState(
    JSON.parse(localStorage.getItem("comentarios")) || []
  );
  

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("comentarios", comentariosJSON); // se não tiver comentários no localStorage, adiciona os comentários do arquivo data/comentarios.js

    const newComment = {
      id: comentariosLS.length + 1,
      filmeId: filme.id,
      name: name,
      comment: comment,
    };

    if (newComment.nome === "" || newComment.comentario === "") {
      alert("Preencha todos os campos");
      return;
    }else{
      const updatedComments = [...comentariosLS, newComment];
      setComentariosLS(updatedComments);
      localStorage.setItem("comentarios", JSON.stringify(updatedComments));
    }
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
