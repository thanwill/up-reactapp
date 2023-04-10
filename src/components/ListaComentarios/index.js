import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./style.css";
import comentarios from "../../data/comentarios";

export default function ListaComentarios({ filme }) {

  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  const comentariosJSON = JSON.stringify(comentarios);
  localStorage.setItem("comentarios", comentariosJSON);

  const comentariosLS = JSON.parse(localStorage.getItem("comentarios"));
  var comments = [];

  try{
    if(!comentariosLS) { // se não tiver comentários
      throw new Error("Não há comentários");      
    }else if(comentariosLS.length === 0){ // se tiver comentários mas não tiver nenhum para o filme atual
      throw new Error("Não há comentários para este filme");
    }else{
      comments = comentariosLS.filter(
        comment => comment.filmeId === filme.id
      );
    } 
  }catch(error){
    console.log(error);
  }


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
