import './filmes.css'

const CatalogoFilmes = ({ filmes }) => {
  return (
    <div className='row'>
      {filmes.map(filme => (
        <div className='col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4'>          
          <div className='card'>
            <img src={filme.image} className='card-img-top' alt='...' />
            <div className='card-body' key={filme.id.toString()}>
              <h5 className='card-title'>{filme.title}</h5>
              <p className='card-text '>{filme.description}</p>
              <a href='html' className='btn btn-primary'>
                Conhecer
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogoFilmes;
