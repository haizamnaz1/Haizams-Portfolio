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
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#contact" className="nav-button">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
