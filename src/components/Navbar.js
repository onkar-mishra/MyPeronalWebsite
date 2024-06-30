import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>OM.</span>
      </div>
      <div className="navbar-middle">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/contact" className="contact-button">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
