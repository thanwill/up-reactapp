import "./modal.css";
import Comentar from "../Comentar";
import Comentarios from "../Comentarios";
import { useState } from "react";
import Title from "../Title";

function Modal({ filme }) {

  // comentarios = comentarios.filter(comments => comments.filmeId === filme.id);

  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div
      className='modal fade'
      id='staticBackdrop'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabIndex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'>
      <div className='modal-dialog '>
        <div className='modal-content col-12'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5 ' id='staticBackdropLabel'>
              {filme.title}
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <Title title={"Sinopse"} />
            <p className='col-10 offset-1 col-md-10 offset-md-1 description'>
              {showMore ? filme.description : filme.description.slice(0, 200)}
            </p>
            <div className='text-center pt-3'>
              <button className="btn-see-more" onClick={handleShowMore}>
                {showMore ? "Mostrar menos" : "Mostrar mais"}
              </button>
            </div>            
            
            <Title title={"Trailer"} />
            <div className='row'>
              <div className='col-10 offset-1 col-md-10 offset-md-1'>
                <div className='embed-responsive embed-responsive-16by9'>
                  <iframe
                    className='embed-responsive-item'
                    src={filme.trailer}
                    title='YouTube video'
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className='row'>
              <Title title={"Comentários"} />
              {filme && (
                <Comentarios filme={filme} /> 
              )}       
            </div>
            <div className='row'>
              <Title title={"Deixe seu comentário"} />
            <Comentar filme={filme} />
            </div>
          </div>
          <div className='modal-footer'>
          <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'>
                Fechar
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
