import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './Hero.css';
import cvImage from '../assets/CV.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  return (
    <section className="hero section-padding">
      <motion.div 
        className="container hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 className="hero-title" style={{ display: 'flex', flexDirection: 'column' }}>
            <motion.div className="title-line" variants={wordVariants}>HAIZAM</motion.div>
            <motion.div className="title-line highlight-text" variants={wordVariants}>NAZREEN</motion.div>
          </motion.h1>
        </div>
        
        <motion.h2 className="hero-subtitle" variants={fadeIn}>
          UX/UI Designer & Web Developer
        </motion.h2>
        
        <div className="hero-content-row">
          <motion.div className="hero-desc" variants={fadeIn}>
            <p>
              I'm a dedicated UI/UX and web developer specializing in creating beautiful, 
              functional digital web experiences. Blending design thinking with 
              technical expertise to build innovative solutions.
            </p>
          </motion.div>
          
          <motion.div className="hero-stats" variants={fadeIn}>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">SE</span>
              <span className="stat-label">Undergrad</span>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-cta" variants={fadeIn} style={{ display: 'flex', gap: '16px' }}>
          <Magnetic>
            <a href="#projects" className="btn-primary" style={{display: 'inline-block', textDecoration: 'none'}}>VIEW MY WORK ↗</a>
          </Magnetic>
          <Magnetic>
            <a href={cvImage} download="Haizam_Nazreen_CV.png" className="btn-secondary" style={{display: 'inline-block', textDecoration: 'none'}}>DOWNLOAD CV</a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
