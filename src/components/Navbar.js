import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'; 

const MyNavbar = () => {
  return (
    <BootstrapNavbar  variant="dark" expand="lg" collapseOnSelect className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand href="/" className="custom-logo" style={{color:"black"}}>OM.</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/workexp">Work Experience</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default MyNavbar;
