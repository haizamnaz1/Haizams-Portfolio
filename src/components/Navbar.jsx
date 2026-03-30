import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
    >
      <div className="container navbar-container">
        <div className="navbar-logo">
          HAIZAM
        </div>
        <div className="navbar-links">
          <Magnetic>
            <a href="#contact" className="nav-button">CONTACT</a>
          </Magnetic>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
