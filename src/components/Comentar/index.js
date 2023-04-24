import { Form, Button, Toast } from "react-bootstrap";
import { useState } from "react";

export default function Comentar({ filme, onAddComentario, comentarioslista }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || comment.trim() === "") {
      setErrorMessage("Por favor, preencha todos os campos.");
      setShowToast(true);
      return;
    } else {
      setShowToast(false);
      const newComment = {
        id: comentarioslista.length + 1,
        filmeId: filme.id,
        name: name,
        comment: comment,
      };

      setName("");
      setComment("");
      onAddComentario(newComment);
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className='col-10 offset-1 col-md-10 offset-md-1'>
        <div className="mt-3 mb-3">
          
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        className='toast alert-danger'>
        <Toast.Body>{errorMessage}</Toast.Body>

      </Toast>
      </div>
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
