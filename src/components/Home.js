import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import Testimonial from './Testimonials';
import Contact from './Contact';
import Workexp from './Workexp';

const Home = () => {
  return (
    <>
      <div className="container home-container d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between py-5">
        <div className="home-content text-center text-lg-start">
          <h2 className="display-4">HEY, I AM </h2>
          <p className="lead">Welcome to My portfolio. I am an iOS Developer. I am passionate about creating mobile applications that solve real-world problems. Feel free to explore my portfolio and get in touch!</p>
          <div className="navbar-right mt-4">
            <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: 'rgb(100, 227, 100)' }}>Contact</Link>
          </div>

        </div>
        <div className="home-image text-center mb-4 mb-lg-0">
          <img src='../assets/photo/onkar.jpeg' alt="Onkar Mishra" className="img-fluid rounded-circle shadow-lg" />
        </div>
      </div>

      <div className="work-section text-center my-5 py-4 bg-light">
        <h1 className="display-5">Experiences</h1>
        <Workexp />
      </div>

      <div className="portfolio-section text-center my-5 py-4">
        <h1 className="display-5">Projects</h1>
        <Portfolio />
      </div>

      <div className="testimonial-section text-center my-5 py-4 bg-light">
        <h1 className="display-5">Testimonial</h1>
        <Testimonial />
      </div>

      <div className="contact-section text-center my-5 py-4">
        <h1 className="display-5">Contact</h1>
        <Contact />
      </div>
    </>
  );
};

export default Home;
