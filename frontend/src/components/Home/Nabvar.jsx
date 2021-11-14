import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.jpeg'

function Nabvar() {
    return (
      
        <div>
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
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/mascotas">Mascotas</Nav.Link>
                <Nav.Link href="/servicios">Servicios</Nav.Link>
                <Nav.Link href="/donaciones">Donaciones</Nav.Link>
                <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                <Nav.Link href="/contactanos">Contáctanos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
}

export default Nabvar
