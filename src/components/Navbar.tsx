import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" className="pt-4 justify-content-between">
      <Container className="p-0 m-0">
        <Navbar.Brand className="p-0 m-0">
          <Nav.Link href="/">
            <img src="/src/assets/logo.png" width="300" height="40" className="mx-4" alt="Logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="mx-auto">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favoritos">Favoritos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="mx-4">
        <Button variant="outline-danger">Login</Button>
        <Button className="mx-2" variant="outline-info">
          Register
        </Button>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
