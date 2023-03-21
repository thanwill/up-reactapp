import Modal from "../Modal/index";
import "./filmes.css";

const Filmes = ({ props }) => {
  //const [filmeSelecionado, setFilmeSelecionado] = useState;
  return (
    <div>
      <div className='row'>
        {props.map(filme => (
          <div className='col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4'>
            <div className='card'>
              <img src={filme.image} className='card-img-top' alt='...' />
              <div className='card-body' key={filme.id}>
                <h5 className='card-title'>{filme.title}</h5>
                <Modal/>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
export default Filmes;
