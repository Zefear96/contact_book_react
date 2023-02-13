import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = ({ handleShow }) => {
  return (
    <>
      <Navbar bg="info" className="d-flex justify-content-around">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button onClick={handleShow} variant="primary">
            Add contact
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
