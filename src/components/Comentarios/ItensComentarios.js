import { ListGroup } from "react-bootstrap";
export default function Itens(comentario, onRemoveComment) {
  return (
    <ListGroup.Item className='comentario'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <p className='comentario-name'>{comentario.name}</p>
        </div>
        <div className='col-12 col-md-6'>
          <button
            className='btn btn-danger btn-sm'
            onClick={() => onRemoveComment(comentario.id)}>
            Excluir
          </button>
        </div>
      </div>
      <p className='comentario-comment'>{comentario.comment}</p>
    </ListGroup.Item>
  );
}
