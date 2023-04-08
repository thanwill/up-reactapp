import { Carousel, Card } from "react-bootstrap";
import './cardcarousel.css'

function CardCarousel({ categorias, onMovieSelect }) {
  return (
    <Carousel>
      {categorias.map(categoria => (
        <Carousel.Item className='pt-3' onLoad={() => onMovieSelect(categoria)}>
          <Card>
            <Card.Body>
              <Card.Title>
                <div className='row'>
                  <div class='text-center'>
                    <i class={categoria.icon}></i>                    
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
