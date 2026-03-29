import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <span className="contact-badge">LET'S CONNECT</span>
        
        <h2 className="contact-title">
          <div className="contact-line-1">LET'S BUILD</div>
          <div className="contact-line-2 rainbow-text">SOMETHING</div>
          <div className="contact-line-3">AMAZING</div>
        </h2>
        
        <p className="contact-desc">
          Open to internship opportunities in Web Development and UX/UI<br />
          Design. Let's create digital experiences that make an impact.
        </p>
        
        <div className="contact-cta">
          <button className="btn-contact-primary">GET IN TOUCH</button>
          <button className="btn-contact-secondary">CALL ME</button>
        </div>
        
        <div className="contact-email">
          <a href="mailto:haizamnazreen@gmail.com">haizamnazreen@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
