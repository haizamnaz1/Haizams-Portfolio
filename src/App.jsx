import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Mouse Glow Handler for cards
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.hover-glow');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <div className="mesh-background" aria-hidden="true" />
      <FloatingNav />
      <Navbar />
      <div className="reveal"><Hero /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Experience /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
