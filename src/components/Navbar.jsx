import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          HAIZAM
        </div>
        <div className="navbar-links">
          <a href="#contact" className="nav-button magnetic-btn">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
