import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">

      <div className="card">

        <a href='https://bluesecures.com/'><h3>BlueSecures</h3></a>
        <p>It is a secure messaging for buisness. Empolyees can message customers and those on whatsApp too. Data on mobile deleted when empolyees exit.</p>
        <p>It is made using Swift, XMPP Protocol, Core Data, Push Notification, Git hub.</p>
        <a href='https://apps.apple.com/in/app/bluesecures/id1545560889'>App Link</a>

      </div>
      <div className="card">
        <a href='https://www.cabstart.co.uk/'><h3>Cabstart</h3></a>
        <p>It is a white-labelled applications we offer for passengers and drivers enable your business to flourish eith a higher level of customer service. Cabstart is the complete solution to your taxi business.</p>
        <p>It is made using Swift, Cocoa framework, Rest api integration, socket.io, Git hub.</p>
        <a href='https://play.google.com/store/apps/details?id=com.cabstart.customer&hl=te&gl=US'>App Link</a>

      </div>
      <div className="card">
        <a href='https://www.bodycoat.in/'><h3>Bodycoat</h3></a>
        <p>Bodycoat offers car detailing services with professionals at your convenience. At Bodycoat, we make sure that you get value for your money and an assured quality of servicing.</p>
        <p>It is made using Rest services, Git hub.</p>
        <a href='https://play.google.com/store/apps/details?id=com.active.bodycoat_rn&hl=en_IN&gl=US'>App Link</a>
      </div>
      <div className="card">
        <a href='https://www.stopitsolutions.com/'><h3>Stopit</h3></a>
        <p>Stopit solutions provides anonymous incident reporting and safety
          technology for a modern workplace via mobile app, web and phone hotline.</p>
        <p>It is made using Swift, Cocoa framework, Rest api integration, Git hub.</p>
        <a href='https://apps.apple.com/us/app/stopit-app/id719179764'>App Link</a>
      </div>
    </div>
  );
}

export default Portfolio;
