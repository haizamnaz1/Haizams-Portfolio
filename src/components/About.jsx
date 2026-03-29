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

            <div className="card education-card purple-card">
              <div className="card-header">
                <h3>Education</h3>
              </div>
              <div className="card-body">
                <h4>ICBT CAMPUS - KANDY</h4>
                <ul style={{marginBottom: '16px'}}>
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
            
            <div className="card connect-card yellow-card">
              <div className="card-body">
                <h3>Get In Touch</h3>
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>haizamnazreen@gmail.com</span>
                </div>
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>072 608 4029</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
