import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import ItensComentarios from "./ItensComentarios.js";
import "./style.css";

export default function Comentarios({ filme, comentarios, onRemoveComment }) {
  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const filtrados = comentarios.filter(
    comentario => comentario.filmeId === filme.id
  );

  return (
    <ListGroup className='col-10 offset-1'>
      {showMore ? (
        <ListGroup.Item className='text-center'>
          <button className='btn-see-more' onClick={handleShowMore}>
            Mostrar menos
          </button>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item className='text-center'>
          <button className='btn-see-more' onClick={handleShowMore}>
            Mostrar mais
          </button>
        </ListGroup.Item>
      )}

      {filtrados.length === 0 && (
        <ListGroup.Item className='text-center'>
          <p className='comentario-comment'>Seja o primeiro a comentar.</p>
        </ListGroup.Item>
      )}

      {showMore
        ? filtrados.map(comentario => {
            return (
              <ListGroup.Item
                className='comentario'
                onMouseEnter={() => setHoveredItemId(comentario.id)}
                onMouseLeave={() => setIsHovering(null)}
                key={comentario.id}>
                <div className='row'>
                  <p className='comentario-name'>{comentario.name}</p>

                  <p className='comentario-comment'>
                    {comentario.comment}
                  </p>
                </div>
                {hoveredItemId === comentario.id && (
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => onRemoveComment(comentario.id)}>
                    Excluir
                  </button>
                )}
              </ListGroup.Item>
            );
          })
        : filtrados.slice(0, 3).map(comentario => {
            return (
              <ListGroup.Item
                className='comentario'
                onClick={() => setHoveredItemId(comentario.id)}
                onMouseLeave={() => setIsHovering(null)}
                key={comentario.id}>
                <div className='row'>
                  <p className='comentario-name'>{comentario.name}</p>

                  <p className='comentario-comment'>
                    Estou aqui: {comentario.comment}
                  </p>
                </div>
                {hoveredItemId === comentario.id && (
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => onRemoveComment(comentario.id)}>
                    Excluir
                  </button>
                )}
              </ListGroup.Item>
            );
          })}
    </ListGroup>
  );
}
