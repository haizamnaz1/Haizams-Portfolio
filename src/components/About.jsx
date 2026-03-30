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
            <div className="edu-timeline">
              <h3 className="edu-timeline-heading">Education</h3>

              <div className="edu-list">

                <div className="edu-item">
                  <div className="edu-dot" />
                  <div className="edu-content">
                    <div className="edu-year">2023 – Present</div>
                    <div className="edu-school">ICBT Campus — Kandy</div>
                    <div className="edu-degree">BSc (Hons) Software Engineering</div>
                    <p className="edu-note">Currently in progress</p>
                  </div>
                </div>

                <div className="edu-item">
                  <div className="edu-dot" />
                  <div className="edu-content">
                    <div className="edu-year">2023 – 2025</div>
                    <div className="edu-school">ICBT Campus — Kandy</div>
                    <div className="edu-degree">HND in Software Engineering</div>
                    <p className="edu-note">Completed</p>
                  </div>
                </div>

                <div className="edu-item">
                  <div className="edu-dot" />
                  <div className="edu-content">
                    <div className="edu-year">2022</div>
                    <div className="edu-school">ICBT Campus — Kandy</div>
                    <div className="edu-degree">Certificate in D-TEC</div>
                    <p className="edu-note">Completed</p>
                  </div>
                </div>

                <div className="edu-item">
                  <div className="edu-dot edu-dot--muted" />
                  <div className="edu-content">
                    <div className="edu-year">Pre-2022</div>
                    <div className="edu-school">Trinity College — Kandy</div>
                    <div className="edu-degree">A/Levels &amp; O/Levels</div>
                    <p className="edu-note">Completed</p>
                  </div>
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
