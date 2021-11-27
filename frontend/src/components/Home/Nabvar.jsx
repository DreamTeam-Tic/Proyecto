import {React, useState, useEffect} from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.jpeg'
import "../../styles/prueba.css"

function Nabvar() {

  const [show, setShow]= useState(true)
  useEffect(() =>{

    if (sessionStorage.getItem('token')){
      setShow(false)
    }

  }, [])

  const salir =()=>{
    sessionStorage.clear()
    window.location.href='/'
  }
  return (

    <div>
      <h1 className='my-3'>Pets for Always</h1>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
             width="35"
             height="30"
            //  className="d-inline align-top"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
           Pets For Always
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mascotas">Mascotas</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/donaciones">Donaciones</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/contactanos">Contáctanos</Nav.Link>
            <Nav.Link hidden={show} href="/homeadmin">Administracion</Nav.Link>

            <div
            className='d-flex justify-content-end' style={{ width: '22rem' }}
            >
                <Nav.Link href="/login">Login </Nav.Link>
                <Nav.Link className='fas fa-user-shield mt-1'></Nav.Link>
                </div>
            

            <Nav.Link hidden={show} onClick={salir} href="#">Salir</Nav.Link>
            </Nav>
            

            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


    );
}

export default Nabvar
