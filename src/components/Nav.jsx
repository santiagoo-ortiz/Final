import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from "react-router-dom"
import Cart from './Cart';
import { useState } from 'react';




const NavB = () => {

  const [show, setShow] =  useState(false)

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

    return (

      <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
            <Nav.Link onClick={ handleShow }  >Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Cart
      show={show}
      handleClose={handleClose}
      >

      </Cart>

      </>

    )
}

export default NavB