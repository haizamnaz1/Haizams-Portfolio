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
              I am a freelance web developer based in London, UK with a solid understanding of frontend 
              technologies, typography, typography rules and its basic principles. I have designed and 
              developed highly creative user interfaces that are both functional and visually appealing.
            </p>
            <p className="margin-top">
              I love finding new ways to improve the digital user experience and I'm always looking for 
              forward-thinking, innovative ways to tackle everyday challenges. My goal is to bridge the gap 
              between design and engineering to build products that look good and do good.
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
            <div className="card experience-card">
              <div className="card-header">
                <h3>Experience</h3>
              </div>
              <div className="card-body">
                <h4>Fullstack Web Developer</h4>
                <p className="card-meta">Self-Employed • Dec 2023 - Present</p>
                <ul>
                  <li>Build accessible and modern user interfaces for startups.</li>
                  <li>Develop full-stack web applications with Next.js and React.</li>
                  <li>Incorporate AI technologies into everyday workflows.</li>
                </ul>
              </div>
            </div>
            
            <div className="card education-card purple-card">
              <div className="card-header">
                <h3>Education</h3>
              </div>
              <div className="card-body">
                <h4>HND Computing & IT (Software Engineering)</h4>
                <p className="card-meta">Edexcel • 2021 - 2023</p>
                <h4>BSc (Hons) Computer Science</h4>
                <p className="card-meta">University of Westminster • 2023 - 2024</p>
              </div>
            </div>
            
            <div className="card connect-card yellow-card">
              <div className="card-body">
                <h3>Get In Touch</h3>
                <p className="contact-detail">✉ haizamnazreen@gmail.com</p>
                <p className="contact-detail">📞 +44 07XXX XXX XXX</p>
                <p className="contact-detail">📍 London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
