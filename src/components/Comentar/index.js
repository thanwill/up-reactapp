import { Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Comentar({onNewComment, filme}){

    const [comment, setComment] = useState('');
    
    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // enviar comentário para API ou atualizar o estado do componente pai com os novos comentários
        const newComment = {
            id: new Date().getTime(),
            name: "Anônimo",
            comment: comment,
            filmeId: filme.id.toString(),
            data:new Date().toDateString('d/MM/YYYY')
        }
        onNewComment(newComment);
        console.log(newComment);
        setComment('');        
    }

  return (
    <Form onSubmit={handleSubmit} className='mt-5 mb-5'>
      <Form.Label>Deixe um :</Form.Label>
      <FormControl
        as="textarea"
        value={comment}
        onChange={handleCommentChange}
        required
      />
      <Button className="mt-3" type="submit">Enviar</Button>
    </Form>
  );
  
}
