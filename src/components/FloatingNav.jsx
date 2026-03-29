import React, { useState, useEffect } from 'react';
import './FloatingNav.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Get in Touch' }
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      
      // Determine the current section the user is looking at
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If a section is dominating the center screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
            break;
          }
        }
      }
      
      // Edge cases
      if (!current) {
        if (window.scrollY < 200) current = ''; // At heroic top
        else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) current = 'contact'; // Bottom of page
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-nav">
      {sections.map((section) => (
        <div key={section.id} className="nav-dot-container">
          <span className={`nav-label ${activeSection === section.id ? 'active' : ''}`}>
            {section.label}
          </span>
          <a
            href={`#${section.id}`}
            className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
            aria-label={section.label}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingNav;
