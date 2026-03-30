import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.span 
          className="section-badge"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          ABOUT
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Design meets <span className="text-gradient">Development</span>
        </motion.h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p>
              Enthusiastic and detail-oriented IT student with a strong foundation in computer systems, programming, UX/UI design, and web development. Eager to apply academic knowledge in real-world environments and contribute to innovative digital solutions.
            </p>
            <p className="margin-top">
              Seeking a Web Development or UX/UI Design internship to gain hands-on experience while supporting organizational technology goals.
            </p>
            
            <blockquote className="about-quote">
              "Designing experiences, building solutions, and always learning along the way."
            </blockquote>
            
            <motion.div 
              className="about-pills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="pill" variants={pillVariants}>WEB DEVELOPMENT</motion.span>
              <motion.span className="pill" variants={pillVariants}>UX/UI DESIGN</motion.span>
              <motion.span className="pill" variants={pillVariants}>FIGMA TO CODE</motion.span>
              <motion.span className="pill" variants={pillVariants}>WEBFLOW EXPERT</motion.span>
            </motion.div>
          </motion.div>
          
          <div className="about-cards">
            <motion.div 
              className="edu-timeline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="edu-timeline-heading">Education</h3>

              <motion.div className="edu-list" variants={staggerContainer}>

                <motion.div className="edu-item" variants={fadeIn}>
                  <div className="edu-dot" />
                  <div className="edu-content">
                    <div className="edu-year">2023 – Present</div>
                    <div className="edu-school">ICBT Campus — Kandy</div>
                    <div className="edu-degree">BSc (Hons) Software Engineering</div>
                    <p className="edu-note">Currently in progress</p>
                  </div>
                </motion.div>

                <motion.div className="edu-item" variants={fadeIn}>
                  <div className="edu-dot" />
                  <div className="edu-content">
                    <div className="edu-year">2023 – 2025</div>
                    <div className="edu-school">ICBT Campus — Kandy</div>
                    <div className="edu-degree">HND in Software Engineering</div>
                    <p className="edu-note">Completed</p>
                  </div>
                </motion.div>

                <motion.div className="edu-item" variants={fadeIn}>
                  <div className="edu-dot" />
                  <div className="edu-content">
                    <div className="edu-year">2022</div>
                    <div className="edu-school">ICBT Campus — Kandy</div>
                    <div className="edu-degree">Certificate in D-TEC</div>
                    <p className="edu-note">Completed</p>
                  </div>
                </motion.div>

                <motion.div className="edu-item" variants={fadeIn}>
                  <div className="edu-dot edu-dot--muted" />
                  <div className="edu-content">
                    <div className="edu-year">Pre-2022</div>
                    <div className="edu-school">Trinity College — Kandy</div>
                    <div className="edu-degree">A/Levels &amp; O/Levels</div>
                    <p className="edu-note">Completed</p>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
