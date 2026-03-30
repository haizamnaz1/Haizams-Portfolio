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

    // Performance-optimized Mouse Handler
    const handleMouseMove = (e) => {
      // Mouse Glow Handler for cards
      const cards = document.querySelectorAll('.hover-glow');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    };

    // Scroll Progress logic
    const handleScrollProgress = () => {
      const bar = document.querySelector('.scroll-progress-bar');
      if (bar) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const width = (window.scrollY / (totalScroll || 1)) * 100;
        bar.style.width = `${width}%`;
      }
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <div className="scroll-progress-bar" />
      <div className="mesh-background" aria-hidden="true">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />
        <div className="blob-4" />
      </div>
      <FloatingNav />
      <Navbar />
      
      <main>
        <div className="reveal" style={{ transitionDelay: '0.1s' }}><Hero /></div>
        <div className="reveal" style={{ transitionDelay: '0.2s' }}><About /></div>
        <div className="reveal" style={{ transitionDelay: '0.3s' }}><Experience /></div>
        <div className="reveal" style={{ transitionDelay: '0.4s' }}><Skills /></div>
        <div className="reveal" style={{ transitionDelay: '0.5s' }}><Projects /></div>
        <div className="reveal" style={{ transitionDelay: '0.6s' }}><Contact /></div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
