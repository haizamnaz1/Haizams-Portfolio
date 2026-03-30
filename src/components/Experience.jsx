import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Intern Web Developer",
      company: "StriveBeam",
      date: "Jan 2025 - Jun 2025",
      cert: "/strivebeam certificate.pdf",
      bullets: [
        "Collaborated with the team to research and define effective color themes for client websites.",
        "Conducted SEO research and implemented on-page optimizations to improve visibility and performance."
      ]
    },
    {
      title: "Hire me to fill this spot!",
      company: "Your Company Name Here",
      date: "Soon, hopefully?",
      cert: null,
      bullets: [
        "Will write clean, scalable code for your incredible team.",
        "Ready to build amazing digital experiences from day one."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <motion.span 
          className="section-badge"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My Work <span className="text-cyan">Experience</span>
        </motion.h2>
        
        <motion.div 
          className="experience-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} className="experience-item" variants={itemVariants}>
              <div className="exp-card">
                <div className="experience-header">
                  <div className="exp-title-block">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <div className="experience-date">{exp.date}</div>
                </div>
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                {exp.cert && (
                  <a
                    href={exp.cert}
                    download
                    className="cert-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
