import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Onkar Mishra</h1>
        <p>iOS Developer</p>
      </header>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:onkarmishra27@gmail.com">onkarmishra27@gmail.com</a></p>
        <p>Phone: +919334129833</p>
        <p>Location: Bangalore</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/onkar-mishra27">linkedin.com/in/onkar-mishra27</a></p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>Bachelor Of Engineering - K S Institute of Technology (06/2016 - 07/2020)</p>
        <p>CGPA: 6.3</p>
      </section>
      <section className="work-experience">
        <h2>Work Experience</h2>
        <article>
          <h3>Software Developer - Deskfactors (08/2023 - 03/2024)</h3>
          <p>Roles & Responsibilities:</p>
          <ul>
            <li>Development tasks</li>
            {/* Add more responsibilities here */}
          </ul>
        </article>
        {/* Add more work experience articles here */}
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <p>Swift, Firebase, Amazon S3, iOS SDK integration, JSON, iOS Swift UI, APNS, Git (GitHub, GitLab, Bitbucket), Jira, Problem Solving</p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <article className="project">
          <h3>BlueSecures</h3>
          <p>Secure messaging app for businesses.</p>
          <p>Tools: Swift, XMPP Protocol, Core Data, Push Notification</p>
          <p><a href="https://bluesecures.com/">Website</a> | <a href="https://apps.apple.com/in/app/bluesecures/id1545560889">App Link</a></p>
        </article>
      </section>
    </div>
  );
}

export default App;
