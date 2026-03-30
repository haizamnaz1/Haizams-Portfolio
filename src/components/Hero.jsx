import React from 'react';
import './Hero.css';
import cvImage from '../assets/CV.png';

const Hero = () => {
  return (
    <section className="hero section-padding">
      <div className="container hero-container">
        <h1 className="hero-title">
          <div className="title-line">HAIZAM</div>
          <div className="title-line highlight-text">NAZREEN</div>
        </h1>
        
        <h2 className="hero-subtitle">UX/UI Designer & Web Developer</h2>
        
        <div className="hero-content-row">
          <div className="hero-desc">
            <p>
              I'm a dedicated UI/UX and web developer specializing in creating beautiful, 
              functional digital web experiences. Blending design thinking with 
              technical expertise to build innovative solutions.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">SE</span>
              <span className="stat-label">Undergrad</span>
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary magnetic-btn" style={{display: 'inline-block', textDecoration: 'none'}}>VIEW MY WORK ↗</a>
          <a href={cvImage} download="Haizam_Nazreen_CV.png" className="btn-secondary magnetic-btn" style={{display: 'inline-block', textDecoration: 'none'}}>DOWNLOAD CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
