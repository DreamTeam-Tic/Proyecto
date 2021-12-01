import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import imagen1 from '../../assets/p1.png'
import imagen2 from '../../assets/p2.jpg'
import imagen3 from '../../assets/p3.png'


export default function Carrusel() {
    return (
        <div className='container mt-5'>
            <Carousel variant="white" className="rounded">
  <Carousel.Item style={{height:'450px'}}>
  
    <img
      className="d-block w-100 img-fluid h-60 position-relative"
      src={imagen1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Se puede juzgar el verdadero carácter de un humano por la forma en la que trata a sus compañeros animales</h5>
      <p>Paul McCartney</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item > */}
  <Carousel.Item style={{height:'450px'}}>
    <img
      className="d-block w-100 img-fluid h-60"
      src={imagen2}
      alt="Second slide"
      
    />
    <Carousel.Caption>
      <h5>Cuando miras a los ojos de un animal rescatado, no puedes evitar enamorarte</h5>
      <p>Paul Shaffer</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'450px'}}>
    <img
      className="d-block w-100 img-fluid h-70"
      src={imagen3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Hasta que uno no ha amado a un animal, parte de su alma permanece dormida.</h5>
      <p>France Anatole</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

