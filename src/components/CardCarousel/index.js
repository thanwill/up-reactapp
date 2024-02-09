import { Carousel, Card } from "react-bootstrap";
import './cardcarousel.css'
import categories from "../../data/categorias";
function CardCarousel({ onMovieSelect }) {
  return (
    <Carousel>
      {categories.map(categoria => (
        <Carousel.Item className='pt-3' onLoad={() => onMovieSelect(categoria)} key={categoria.id}>
          <Card>
            <Card.Body>
              <Card.Title>
                <div className='row'>
                  <div className='text-center' >
                    <i className={categoria.icon}></i>                    
                    {categoria.tipo}
                  </div>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardCarousel;
