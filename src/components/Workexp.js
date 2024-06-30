import React from 'react';

const WorkExp = () => {
  return (
    <div className="portfolio-container">
      <div className="card">
        <h2>Software Developer at <a href='https://bluesecures.com/'>Deskfactors</a></h2>
        <p><strong>Duration:</strong> August 2023 - March 2024</p>
        <div className="responsibilities">
          <h3>Responsibilities:</h3>
          <p>Designed UI components, enhancing user experience by 20%. Optimized system architecture for performance and scalability. Leveraged Couchbase for efficient data retrieval. Managed photo uploads to Amazon S3 and implemented local storage optimizations.</p>
        </div>

        <div className="achievements">
          <h3>Achievements:</h3>
          <p>Implemented XMPP protocol for real-time data fetching, reducing processing time by 10%. Resolved UI issues related to chat screen updates.</p>
        </div>

        <div className="skills-used">
          <h3>Skills Used:</h3>
          <p>UI Design, System Optimization, Couchbase, Amazon S3, XMPP, Performance Tuning.</p>
        </div>
      </div>

      <div className="card">
        <h2>Mac and iOS Developer at <a href='https://emudhra.com/'>eMudhra</a></h2>
        <p><strong>Duration:</strong> May 2023 - August 2023</p>

        <div className="responsibilities">
          <h3>Responsibilities:</h3>
          <p>Developed iOS application using SwiftUI with a focus on modern UI design and user interaction. Initiated app project, outlining design concepts and architectural framework.</p>
        </div>

        <div className="achievements">
          <h3>Achievements:</h3>
          <p>Led initial design and architectural framework discussions for the iOS app.</p>
        </div>

        <div className="skills-used">
          <h3>Skills Used:</h3>
          <p>SwiftUI, UI/UX Design, Project Initiation, Architectural Framework.</p>
        </div>
      </div>

      <div className="card">
        <h2>iOS Developer at <a href='https://www.techactive.io/'>Tech Active Solutions</a></h2>
        <p><strong>Duration:</strong> October 2021 - May 2023</p>
        <div className="responsibilities">
          <h3>Responsibilities:</h3>
          <p>Developed user-friendly iOS applications using Swift and Cocoa framework. Collaborated with cross-functional teams for timely project delivery. Identified and resolved technical issues, improving app stability. Conducted testing and optimization, increasing user retention rates.</p>
        </div>

        <div className="achievements">
          <h3>Achievements:</h3>
          <p>Reduced bug occurrence by 80% through proactive issue resolution. Improved user retention rates by 30% through testing and optimization. Streamlined development with technical documentation, reducing onboarding time.</p>
        </div>

        <div className="skills-used">
          <h3>Skills Used:</h3>
          <p>Swift, Cocoa Framework, Cross-functional Collaboration, Bug Resolution, Testing & Optimization, Technical Documentation.</p>
        </div>
      </div>

    </div>
  );
};

export default WorkExp;
