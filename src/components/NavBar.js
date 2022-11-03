import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/NavBar.css";

function NavBar() {
  return (
    <Navbar style={{ background: "#0d192d" }} sticky="top" variant="dark">
      <Container>
        <Nav className="m-auto">
          <Nav.Link className="Navbar-item" href="#intro">
            Intro
          </Nav.Link>
          <Nav.Link className="Navbar-item" href="#education">
            About Me
          </Nav.Link>
          <Nav.Link className="Navbar-item" href="#portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="Navbar-item" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
