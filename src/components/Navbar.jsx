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
          <a href="#work" className="nav-link">WORK</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#contact" className="nav-button">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
