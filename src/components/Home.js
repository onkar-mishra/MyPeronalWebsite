import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import Portfolio from './Portfolio';
import Testimonial from './Testimonials';
import Contact from './Contact';
import Workexp from './Workexp';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h2>HEY, I AM </h2>
          <p>Welcome to My portfolio. I am an IOS Developer.
            I am passionate about creating mobile applications that solve real world problems. Feel free to explore my portfolio and <br />get in touch!</p>
          <div className="navbar-right">
            <Link to="/contact" className="contact-button">Contact</Link>
          </div>
        </div>
        <div className="home-image">
          <img src='../assets/photo/onkar.jpeg' alt="Onkar Mishra" />
        </div>

      </div>
      <div className="portfolio-section center">
        <h1>Portfolio</h1>
        <Portfolio />
      </div>
      <div className="work-section center">
        <h1 >Experiences</h1>
        <Workexp />
      </div>
      <div className="testimonial-section center">
        <h1>Testimonial</h1>
        <Testimonial />
      </div>
      <div className="contact-section center">
        <h1 >Contact</h1>
        <Contact />
      </div>
    </>
  );
};

export default Home;
