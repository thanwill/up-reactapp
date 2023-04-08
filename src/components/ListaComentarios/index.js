import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./style.css";

export default function ListaComentarios({ comentarios }) {
  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <ListGroup className="col-10 offset-1">      
      {showMore
        ? comentarios.map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>
                {comment.comment}
              </small>
            </ListGroup.Item>
          ))
        : comentarios.slice(0, 3).map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>
                {comment.comment}
              </small>
            </ListGroup.Item>
          ))}
      <ListGroup.Item className="text-center">
        <button onClick={handleShowMore}>
          {showMore ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </ListGroup.Item>
    </ListGroup>
  );
}
