import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <span className="section-badge">ABOUT</span>
        
        <h2 className="section-title">
          Design meets <span className="text-gradient">Development</span>
        </h2>
        
        <div className="about-grid">
          <div className="about-content">
            <p>
              Enthusiastic and detail-oriented IT student with a strong foundation in computer systems, programming, UX/UI design, and web development. Eager to apply academic knowledge in real-world environments and contribute to innovative digital solutions.
            </p>
            <p className="margin-top">
              Seeking a Web Development or UX/UI Design internship to gain hands-on experience while supporting organizational technology goals.
            </p>
            
            <blockquote className="about-quote">
              "Designing experiences, building solutions, and always learning along the way."
            </blockquote>
            
            <div className="about-pills">
              <span className="pill">WEB DEVELOPMENT</span>
              <span className="pill">UX/UI DESIGN</span>
              <span className="pill">FIGMA TO CODE</span>
              <span className="pill">WEBFLOW EXPERT</span>
            </div>
          </div>
          
          <div className="about-cards">
            <div className="card education-card hover-glow">
              <div className="card-header">
                <h3>Education</h3>
              </div>
              <div className="card-body">
                <h4>ICBT CAMPUS - KANDY</h4>
                <ul style={{marginBottom: '16px'}}>
                  <li>Currently pursuing software engineering degree.</li>
                  <li>Successfully completed HND in software engineering. (2023-2025)</li>
                  <li>Certificate in D-TEC (2022)</li>
                </ul>
                <h4>TRINITY COLLEGE - KANDY</h4>
                <ul>
                  <li>Successfully completed A/L's</li>
                  <li>Successfully completed O/L's</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
