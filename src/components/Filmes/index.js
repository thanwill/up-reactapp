import "../../global.css";

const ListaFilmes = ({ filmes, onMovieSelect }) => {
  return (
    <div>
      <div className='row'>     
             
        {filmes.map(filme => (                
          <div className='col-10 offset-1 col-md-3 mt-5' key={filme.id}>
            <div className='card'>
              <img src={filme.image} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{filme.title}</h5>
                <button
                  onClick={() => onMovieSelect(filme)}
                  type='button'
                  className='btn btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#staticBackdrop'>
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListaFilmes;
