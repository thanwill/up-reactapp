import "../../global.css";
import movies from "../../data/filmes";

const ListaFilmes = ({ onMovieSelect }) => {
  return (
    <div>
      <div className='row'>
        {movies.map(filme => (
          <div className='col-12 col-md-4 mt-5' key={filme.id}>
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
