import React from 'react';
import './Home.css';
import Image from '../assests/onkar.jpeg'; 
import { Link } from 'react-router-dom';
import "./Navbar.css"
import Portfolio from './Portfolio';
import Testimonial from './Testimonials';
import Contact from './Contact';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-content">
        <h2>HEY, I AM </h2>
        <p>Welcome to My portfolio. I am an IOS Developer.
            I am passionate about creating mobile applications that solve real world problems. Feel free to explore my portfolio and <br/>get in touch!</p>
            <div className="navbar-right">
        <Link to="/contact" className="contact-button">Contact</Link>
      </div>
      </div>
      <div className="home-image">
        <img src={Image} alt="Onkar Mishra" />
      </div>
      
    </div>
    <div className="portfolio-section">
    <h1 style={{ textAlign: 'center'}}>Portfolio</h1> 
        <Portfolio />
      </div>
    <div className="testimonial-section">
    <h1 style={{ textAlign: 'center'}}>Testimonial</h1> 
        <Testimonial />
      </div>
      <div className="contact-section">
    <h1 style={{ textAlign: 'center'}}>Contact</h1> 
        <Contact />
      </div>
    </>
  );
};

export default Home;
