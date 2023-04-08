import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import comments from '../../data/comentarios';

function Comentar({ filme }) {

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
 
  function addComment(comment) {
    setComment([...comments, comment]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      id: comments.length + 1,
      name: name,
      comment: comment,
      movieId: filme.id,
    };
    console.log(newComment);
    addComment(newComment);
    setName('');
    setComment('');
  }

  return (
    <Form onSubmit={handleSubmit} className='col-10 offset-1 col-md-10 offset-md-1'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type='text'
          placeholder='Digite seu nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Comentário</Form.Label>
        <Form.Control
          type='text'
          placeholder='Digite seu comentário'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Enviar
      </Button>
    </Form>
  );

}

export default Comentar;