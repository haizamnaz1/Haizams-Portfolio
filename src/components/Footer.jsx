import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">HAIZAM NAZREEN</div>
          <p className="copyright">© 2025 All rights reserved.</p>
        </div>
        
        <div className="footer-right">
          <Magnetic>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="back-to-top-btn"
            >
              BACK TO TOP 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </Magnetic>
          <p>Made by myself</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
