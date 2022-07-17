import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const if_login = () =>{
  console.log("test : " +   localStorage.getItem('uesrname'))
  if(localStorage.getItem('username') !== null){
    return (<> <Nav.Link href="/login">Login</Nav.Link>
    <Nav.Link href="/signup">SingUp</Nav.Link></>)
  } else {
    return (<>
     <Nav.Link>{localStorage.getItem('username')}</Nav.Link>,
    <Nav.Link >로그아웃</Nav.Link>
    </>)
  }
}

const HeaderComponent = () =>  {
  let username = localStorage.getItem('username')
  const if_login = () =>{
    console.log("test : " +   username)
    if(username === null){
      return (<> <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">SingUp</Nav.Link></>)
    } else {
      return ( <>
       <Nav.Link>{username}</Nav.Link>
      <Nav.Link >로그아웃</Nav.Link>
      </>)
    }
  }
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Marine-Traffic-Logistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/board">게시판</Nav.Link>
            <Nav.Link href="#link">Dashboard</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link href="/map">VideoStreaming</Nav.Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
              {if_login()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default HeaderComponent;