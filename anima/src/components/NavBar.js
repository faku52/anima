import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function Navegacion() {
  return (
    
    <Navbar id="navbar-container" bg="light" expand="lg">
      
      <Container >
        <Navbar.Brand id="brandName" href="#home"><p>Vitanima</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="sitios">
            <Nav.Link href="#home"><p>Inicio</p></Nav.Link>
            <Nav.Link href="#compras"><p>Compras</p></Nav.Link>
            <Nav.Link href="#contacto"><p>Contacto</p></Nav.Link>
            <div>
              <CartWidget></CartWidget>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;