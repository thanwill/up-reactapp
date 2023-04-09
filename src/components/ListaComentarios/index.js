import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./style.css";

export default function ListaComentarios({ filme }) {
  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  const [showDelete, setShowDelete] = useState(false);
  const commentStorage = JSON.parse(localStorage.getItem("comentarios"));
  const comments = commentStorage.filter(
    comment => comment.filmeId === filme.id
  );

  const handleDelete = id => {
    const updatedComments = commentStorage.filter(comment => comment.id !== id);
    localStorage.setItem("comentarios", JSON.stringify(updatedComments));
    setShowDelete(false);
  };

  return (
    <ListGroup className='col-10 offset-1'>
      {showMore
        ? comments.map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>{comment.comment}</small>
            </ListGroup.Item>
          ))
        : comments.slice(0, 3).map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>{comment.comment}</small>
            </ListGroup.Item>
          ))}
      <ListGroup.Item className='text-center'>
        <button onClick={handleShowMore}>
          {showMore ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </ListGroup.Item>
    </ListGroup>
  );
}
