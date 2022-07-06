import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Marine-Traffic-Logistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Map</Nav.Link>
            <Nav.Link href="#link">Dashboard</Nav.Link>
            <Nav.Link href="#link">Map</Nav.Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default HeaderComponent;