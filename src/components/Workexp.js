import React from 'react';
import './Workexp.css';

const WorkExp = () => {
  return (
    <div className="portfolio-container">
      <div className="cardd">
        <div className='company'>
          <h3><a href='https://bluesecures.com/' >Deskfactors</a></h3>
          <img src='../assets/company-images/bluesecures_logo.jpg' />
        </div>
        <br />
        <div className='comp-prof'>
          <p><strong >Software Developer</strong> <br />
            <strong>August 2023 - March 2024</strong></p>
        </div>
        <div className='comp-data'>
          <div className="responsibilities">
            <p>Designed UI components, enhancing user experience by 20%. Optimized system architecture for performance and scalability. Leveraged Couchbase for efficient data retrieval. Managed photo uploads to Amazon S3 and implemented local storage optimizations.</p>
          </div>

          <div className="achievements">
            <p>Implemented XMPP protocol for real-time data fetching, reducing processing time by 10%. Resolved UI issues related to chat screen updates.</p>
          </div>

          <div className="skills-used">
            <p><strong>UI Design, System Optimization, Couchbase, Amazon S3, XMPP, Performance Tuning.</strong></p>
          </div>
        </div>
      </div>

      <div className="cardd">
        <div className='company2'>
          <h3 ><a href='https://emudhra.com/'>eMudhra</a></h3>
          <img className='emudhra' src='../assets/company-images/emudhra.jpg' />
        </div>
        <br />
        <div className='comp-prof'>
          <p><strong >Mac and Ios Developer</strong> <br />
            <strong>May 2023 - August 2024</strong></p>
        </div>
        <div className='comp-data'>
          <div className="responsibilities">
            <p>Developed iOS application using SwiftUI with a focus on modern UI design and user interaction. Initiated app project, outlining design concepts and architectural framework.</p>
          </div>

          <div className="achievements">
            <p>Led initial design and architectural framework discussions for the iOS app.</p>
          </div>

          <div className="skills-used">
            <p><strong>SwiftUI, UI/UX Design, Project Initiation, Architectural Framework.</strong></p>
          </div>
        </div>
      </div>

      <div className="cardd">
      <div className='company3'>
          <h3 ><a href='https://www.techactive.io/'>Tech Active Solutions</a></h3>
          <img className='emudhra' src='../assets/company-images/techactiveww_logo.jpg' />
        </div>
        <br/>
        <div className='comp-prof'>
          <p><strong >Ios Developer</strong> <br />
            <strong>October 2021 - August 2024</strong></p>
        </div>
        <div className='comp-data'>
        <div className="responsibilities">
          <p>Developed user-friendly iOS applications using Swift and Cocoa framework. Collaborated with cross-functional teams for timely project delivery. Identified and resolved technical issues, improving app stability. Conducted testing and optimization, increasing user retention rates.</p>
        </div>

        <div className="achievements">
          <p>Reduced bug occurrence by 80% through proactive issue resolution. Improved user retention rates by 30% through testing and optimization. Streamlined development with technical documentation, reducing onboarding time.</p>
        </div>

        <div className="skills-used">
          <p><strong>Swift, Cocoa Framework, Cross-functional Collaboration, Bug Resolution, Testing & Optimization, Technical Documentation.</strong></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WorkExp;
