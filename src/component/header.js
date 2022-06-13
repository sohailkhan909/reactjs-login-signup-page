import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
       <>
     <Navbar bg="dark" variant="dark">
 <Container>
     <Navbar.Brand href="#home">Digizest</Navbar.Brand>
     <Nav className="me-auto">
     <Nav.Link href="#home">User Registration</Nav.Link>
     <Nav.Link href="#features">User Details</Nav.Link>
     <Nav.Link href="#pricing">User Login</Nav.Link>
     </Nav>
</Container>
  </Navbar>
        </>
    )
};

export default Header;