import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../css/NavBar.css";

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Navbar style={{ background: "#0d192d" }} sticky="top" variant="dark">
      <Container>
        <Nav className="m-auto">
          <Nav.Link className="Navbar-item" href="#intro">
            Intro
          </Nav.Link>
          <Nav.Link className="Navbar-item" href="#about">
            About Me
          </Nav.Link>
          <NavDropdown
            title={<span className="Navbar-item">Portfolio</span>}
            menuVariant="dark"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onToggle={() => setIsClicked(!isClicked)}
            show={isClicked || isHovered}
          >
            <NavDropdown.Item
              className="Navbar-item"
              href="#strikezone-analytics"
            >
              Strikezone Analytics
            </NavDropdown.Item>
            <NavDropdown.Item className="Navbar-item" href="#lego-vr">
              Lego VR
            </NavDropdown.Item>
            <NavDropdown.Item className="Navbar-item" href="remind-me">
              Remind Me!
            </NavDropdown.Item>
            <NavDropdown.Item className="Navbar-item" href="snake">
              Snake
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="Navbar-item" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
