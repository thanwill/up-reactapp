import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./style.css";
import comentarios from "../../data/comentarios";

export default function Comentarios({ filme }) {

  const comentariosJSON = JSON.stringify(comentarios);
  const [comentariosLS, setComentariosLS] = useState(
    JSON.parse(localStorage.getItem("comentarios")) || []
  );

  localStorage.setItem("comentarios", comentariosJSON); // se não tiver comentários no localStorage, adiciona os comentários do arquivo data/comentarios.js

  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  function handleDeleteComment(commentId) {
    // cria uma cópia do array de comentários
    const updatedComments = [...comentariosLS];

    // procura o índice do comentário a ser excluído
    const commentIndex = updatedComments.findIndex(
      comment => comment.id === commentId
    );

    if (commentIndex >= 0) {
      // remove o comentário da cópia do array
      updatedComments.splice(commentIndex, 1);

      // atualiza o estado e o localStorage com o array atualizado
      setComentariosLS(updatedComments);
      localStorage.setItem("comentarios", JSON.stringify(updatedComments));
    }
  }

  try {
    if (!comentariosLS) {
      throw new Error("Não há comentários"); // se não tiver comentários
    } else if (comentariosLS.length === 0) {
      throw new Error("Não há comentários para este filme"); // se tiver comentários mas não tiver nenhum para o filme atual
    } else {
      var comments = comentariosLS.filter(
        comment => comment.filmeId === filme.id
      ); // se tiver comentários para o filme atual
    }
  } catch (error) {
    console.log(error);
  }

  return (

    <ListGroup className='col-10 offset-1'>
      {/* {showMore
        ? comments.map(comment => (
            <ListGroup.Item key={comment.id}>
              <div className='comment-wrapper'>
                <div className='row'>
                  <p className='col-10'>{comment.name}</p>
                  <button
                    className='col'
                    onClick={() => handleDeleteComment(comment.id)}>
                    X
                  </button>
                </div>
                <small>{comment.comment}</small>
              </div>
            </ListGroup.Item>
          ))
        : comments.slice(1, 3).map(comment => (
            <ListGroup.Item key={comment.id}>
              <p>{comment.name}</p>
              <small>{comment.comment}</small>
            </ListGroup.Item>
          ))} */}
          {comments.map(comment => (
            <ListGroup.Item key={comment.id}>
            <div className='comment-wrapper'>
              <div className='row'>
                <p className='col-10'>{comment.name}</p>
                <button
                  className='col'
                  onClick={() => handleDeleteComment(comment.id)}>
                  X
                </button>
              </div>
              <small>{comment.comment}</small>
            </div>
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
