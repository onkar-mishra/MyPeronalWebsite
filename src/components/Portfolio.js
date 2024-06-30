import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "BlueSecures",
      description: "It is a secure messaging for business. Employees can message customers and those on WhatsApp too. Data on mobile deleted when employees exit.",
      technologies: "Swift, XMPP Protocol, Core Data, Push Notification, GitHub",
      link: "https://bluesecures.com/",
      appLink: "https://apps.apple.com/in/app/bluesecures/id1545560889"
    },
    {
      id: 2,
      title: "Cabstart",
      description: "It is a white-labelled application we offer for passengers and drivers to enable your business to flourish with a higher level of customer service. Cabstart is the complete solution to your taxi business.",
      technologies: "Swift, Cocoa framework, Rest API integration, socket.io, GitHub",
      link: "https://www.cabstart.co.uk/",
      appLink: "https://play.google.com/store/apps/details?id=com.cabstart.customer&hl=te&gl=US"
    },
    {
      id: 3,
      title: "Bodycoat",
      description: "Bodycoat offers car detailing services with professionals at your convenience. At Bodycoat, we make sure that you get value for your money and an assured quality of servicing.",
      technologies: "Rest services, GitHub",
      link: "https://www.bodycoat.in/",
      appLink: "https://play.google.com/store/apps/details?id=com.active.bodycoat_rn&hl=en_IN&gl=US"
    },
    {
      id: 4,
      title: "Stopit",
      description: "Stopit solutions provide anonymous incident reporting and safety technology for a modern workplace via mobile app, web, and phone hotline.",
      technologies: "Swift, Cocoa framework, Rest API integration, GitHub",
      link: "https://www.stopitsolutions.com/",
      appLink: "https://apps.apple.com/us/app/stopit-app/id719179764"
    }
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <div key={project.id} className="card">
          <a href={project.link}><h3>{project.title}</h3></a>
          <p>{project.description}</p>
          <p>It is made using {project.technologies}.</p>
          <a href={project.appLink}>App Link</a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
