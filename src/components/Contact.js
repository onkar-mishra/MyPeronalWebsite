import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  const SOCIAL = [
    {    
      id: 1,
      link: "mailto:onkarmishra27@gmail.com", 
      icon: <FaEnvelope />,
    },
    {
      id: 2,
      link: "https://github.com/onkar-mishra",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/onkar-mishra27/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <div className='contact-container container my-5'>
      <div className='text-center'>
        <p>Feel free to contact me using your preferred medium.</p>
      </div>
      <div className='social-links mb-4'>
        {SOCIAL.map(({ id, link, icon }) => (
          <a 
            key={id} 
            href={link} 
            target='_blank' 
            rel="noopener noreferrer" 
            className='mx-3 duration-200 ease-in-out hover:text-rose-400'
          >
            {icon}
          </a>
        ))}
      </div>
      <div className='contact-form'>
        <form action="https://getform.io/f/pbgxxzpa" method="POST">
          <div className="row">
            <div className="col-12 mb-3">
              <label>Name</label>
              <input type='text' name='name' className="form-control" required />
            </div>
            <div className="col-12 mb-3">
              <label>Phone</label>
              <input type='text' name='phone' className="form-control" />
            </div>
            <div className="col-12 mb-3">
              <label>Email</label>
              <input type='email' name='email' className="form-control" required />
            </div>
            <div className="col-12 mb-3">
              <label>Message</label>
              <textarea name='message' rows="5" className='form-control' required></textarea>
            </div>
          </div>
          <div className='text-center'>
            <button type="submit" className='btn btn-success'>SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
