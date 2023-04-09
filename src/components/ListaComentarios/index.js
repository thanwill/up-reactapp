import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./style.css";

export default function ListaComentarios({ comentarios }) {
  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  function ExibeComentarios() {
    const commentStorage = JSON.parse(localStorage.getItem("comentarios"));
    if (commentStorage && commentStorage.length > 0) {
      console.log(commentStorage);
      // Ou exibe os comentários na tela em um elemento HTML
      const listarComentarios = document.getElementById("lista-comentarios");
      listarComentarios.innerHTML = "";
      comentarios.forEach(comentario => {
        const comentarioHTML = `
      <div key="${comentario.id}">
        <h3>${comentario.nome} disse:</h3>
        <p>${comentario.mensagem}</p>
      </div>
    `;
        listarComentarios.innerHTML += comentarioHTML;
      });
    } else {
      console.log("Não há comentários salvos no localStorage.");
    }
  }

  return (
    <ListGroup className='col-10 offset-1'>
      {/* {showMore
        ? comentarios.map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>{comment.comment}</small>
            </ListGroup.Item>
          ))
        : comentarios.slice(0, 3).map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>{comment.comment}</small>
            </ListGroup.Item>
          ))} */}
      {ExibeComentarios()
        ? comentarios.map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>{comment.comment}</small>
            </ListGroup.Item>
          ))
        : comentarios.slice(0, 3).map(comment => (
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
