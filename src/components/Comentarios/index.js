import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./style.css";
import comentarios from "../../data/comentarios";

export default function Comentarios({ filme }) {

  const [showMore, setShowMore] = useState(false);
  const comentariosJSON = JSON.stringify(comentarios);
  const [comentariosLS, setComentariosLS] = useState(
    JSON.parse(localStorage.getItem("comentarios")) || [] // 
  );
  function handleShowMore() {
    setShowMore(!showMore);
  }

  function handleDeleteComment(commentId) {
    localStorage.setItem("comentarios", comentariosJSON); // se não tiver comentários no localStorage, adiciona os comentários do arquivo data/comentarios.js
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
  var comments = comentariosLS.filter(
    comment => comment.filmeId === filme.id
  );

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

      {comments.length > 0 ? (
        <>
          <ListGroup.Item className='text-center'>
            <button onClick={handleShowMore}>
              {showMore ? "Mostrar menos" : "Mostrar mais"}
            </button>
          </ListGroup.Item>
          {showMore
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
            : comments.slice(0, 3).map(comment => (
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
        </>
      ) : (
        <ListGroup.Item className='text-center'>
          <p className='col-12 text-center'>
            Adicione um comentário para este filme
          </p>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}
