import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <motion.div 
        className="scroll-progress-bar" 
        style={{ scaleX, transformOrigin: "0%" }} 
      />
      <div className="mesh-background" aria-hidden="true">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />
        <div className="blob-4" />
      </div>
      <FloatingNav />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  )
}

export default App
