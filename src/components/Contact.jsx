import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './Contact.css';

const Contact = () => {
  const email = "haizamnazreen@gmail.com";
  const phone = "+940726084029";

  const socialLinks = [
    { name: "GITHUB", url: "https://github.com/haizamnaz1" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/haizam-nazreen/" }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <motion.span 
          className="contact-badge"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          LET'S CONNECT
        </motion.span>
        
        <motion.h2 
          className="contact-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.1 }}
        >
          <div className="contact-line-1">LET'S BUILD</div>
          <div className="contact-line-2 rainbow-text">SOMETHING</div>
          <div className="contact-line-3">AMAZING</div>
        </motion.h2>
        
        <motion.p 
          className="contact-desc"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Open to internship opportunities in Web Development and UX/UI<br />
          Design. Let's create digital experiences that make an impact.
        </motion.p>
        
        <motion.div 
          className="contact-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          <Magnetic>
            <a href={`mailto:${email}`} className="btn-contact-primary">GET IN TOUCH</a>
          </Magnetic>
          <Magnetic>
            <a href={`tel:${phone}`} className="btn-contact-secondary">CALL ME</a>
          </Magnetic>
          <Magnetic>
            <a href="https://github.com/haizamnaz1" target="_blank" rel="noopener noreferrer" className="btn-social-icon github-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-3-7-3"/></svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.linkedin.com/in/haizam-nazreen/" target="_blank" rel="noopener noreferrer" className="btn-social-icon linkedin-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </Magnetic>
        </motion.div>
        
        <motion.div 
          className="contact-email"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          <a href={`mailto:${email}`}>{email}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
