import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowDown} from "react-icons/fa";
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
  ]
  return (
    <div className='contact-container' >
      <br/>
      <div className='contact-content'>
          <div className='center'>
            <p style={{marginTop:"-2px"}}> Feel free to contact me using preferred medium.</p>
          </div>
          <div className='social-links' >
            {SOCIAL.map(({id,link,icon})=>(
              <a href={link} target='_blank' rel="noopener noreferrer" className='duration-200 ease-in-out hover:text-rose-400'>{icon}</a>
            ))}
          </div>
          <div className='contact-form'>
            <form action="https://getform.io/f/pbgxxzpa" method="POST">
              <div>
                <div >
                  <label >name</label>
                  <input type='text' name='name'/>
                </div>
                <div>
                  <label >phone</label>
                  <input type='text' name='phone'/>
                </div>
                <div >
                  <label >email</label>
                  <input type='text' name='email' />
                </div>
                <div >
                  <label >message</label>
                  <textarea name='message' rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none' >
                  </textarea>
                </div>
              </div>
              <div >
                <button >SEND MESSAGE</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
