import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import gatocolorido from '..//..//assets/gatocolorido.jpg'
import mascotabonita from '../../assets/mascotabonita.jpg'
import Propaganda from '../../assets/Propaganda.jpg'
import '../../styles/Contactanos.css'




export default function Partesuperior() {
    return (
        <div className='container mt-5'>
            <Carousel variant="white" className="rounded">
  <Carousel.Item style={{height:'600px'}}>
    
    <img
      className="d-block w-100 img-fluid h-60 position-relative"
      src={gatocolorido}
      alt="First slide"
    />
    <Carousel.Caption>
    <div className="texto">¿Quieres saber mas sobre estas adorables mascotas?, con nosotros puedes tener la informacion de todos ellos, les buscamos un hogar agradable y calido donde tengan tiempo para ellos</div>
        <form action="https://www.youtube.com/">
        <button type="submit" className="btn btn-secondary">Escribenos</button>
    </form>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'600px'}}>
    <img
      className="d-block w-100 img-fluid h-60"
      src={mascotabonita}
      alt="Second slide"
      
    />
    <Carousel.Caption>
      
      <div className="texto">Si te gusto alguna mascota, o te parece agradable saber informacion sobre está, no dudes en ponerte en contacto con nosotros para realizar la adopcion y obviamente antes de esto tener toda la informacion de tu futura mastocta.</div>
        <form action="https://www.youtube.com/">
        <button type="submit" className="btn btn-secondary">Donaciones</button>
    </form>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'600px'}}>
    <img
      className="d-block w-100 img-fluid h-70"
      src={Propaganda}
      alt="Third slide"
    />
    <Carousel.Caption>
    <div className="texto">Entonces que esperas para ponerte en contacto con nosotros, resolvemos todo tipo de duda de manera virtual, para que tengas una comodidad agradable al momento de mirar tu futura mascota.</div>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
