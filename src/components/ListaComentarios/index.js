import { ListGroup } from 'react-bootstrap';

export default function ListaComentarios({ comentarios }) {
  return (
    <ListGroup>
      {comentarios.map(comment => (
        <ListGroup.Item key={comment.id}>
          <p>{comment.name}</p>
          <small>{comment.comment} em {comment.data} </small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
