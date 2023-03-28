import "./modal.css";
import Comentar from '../Comentar'
import ListaComentarios from '../ListaComentarios';
import { useState } from 'react';

function Modal({ filme, listaComentarios }) {

  listaComentarios = listaComentarios.filter(
    comments => comments.filmeId === filme.id
  );


  function handleNewComment(newComment) {
    setComentarios([...listaComentarios, newComment]);
  }

  return (
    <div
      class='modal fade'
      id='staticBackdrop'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabIndex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'>
      <div className='modal-dialog '>
        <div className='modal-content col-10'>
          <div className='modal-header'>
            <h1 class='modal-title fs-5 ' id='staticBackdropLabel'>
              {filme.title}
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <p className='col-10 offset-1 col-md-10 offset-md-1 pt-5 pb-4'>
              {filme.description}
            </p>
            <table class='table table-striped'>
              <tbody>
                <tr>
                  <td>Avaliações</td>
                  <td>{filme.assessments}</td>
                </tr>
                <tr>
                  <td>Tomatometer</td>
                  <td>{filme.rating}</td>
                </tr>
                <tr>
                  <td>Classificação</td>
                  <td>{filme.classification}</td>
                </tr>
                <tr>
                  <td>Ano</td>
                  <td>{filme.year}</td>
                </tr>
              </tbody>
            </table>
            <div className='p-3'>
              <div class='ratio ratio-16x9'>
                <iframe
                  class='embed-responsive-item pt-3'
                  src={filme.trailer}
                  title='YouTube video'
                  allowfullscreen></iframe>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-10 offset-1'>
                <h1 className="text-secondary">Comentários</h1>
                <ListaComentarios comentarios={listaComentarios} />
                <hr />                
                < Comentar onNewComment={handleNewComment} filme={filme} />
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'>
              Fechar
            </button>
            <button type='button' className='btn btn-primary'>
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
