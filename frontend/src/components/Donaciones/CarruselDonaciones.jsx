import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import imagen4 from '../../assets/p4.jpg'
import imagen5 from '../../assets/p11.jpg'
import imagen6 from '../../assets/p6.jpg'

export default function CarruselDonaciones() {
    return (
        <div className='container mt-5'>
            <Carousel variant="white" className="rounded-circle">
  <Carousel.Item style={{height:'450px'}}>
    <img
      className="d-block w-100 img-fluid h-60 position-relative rounded"
      src={imagen4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>¡No compres uno de raza, adopta uno sin casa!</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'450px'}}>
    <img
      className="d-block w-100 img-fluid h-60 position-relative rounded"
      src={imagen5}
      alt="Second slide"
      
    />
    <Carousel.Caption>
      <h5>No puedes comprar la felicidad pero puedes adoptar un perro y eso es casi lo mismo</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'450px'}}>
    <img
      className="d-block w-100 img-fluid h-70 position-relative rounded"
      src={imagen6}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>No vamos a cambiar el mundo ayudando un animal, pero al menos el mundo habrá cambiado para él</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

