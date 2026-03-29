import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Intern Web Developer",
      company: "StriveBeam",
      date: "Jan 2025 - Jun 2025",
      bullets: [
        "Collaborated with the team to research and define effective color themes for client websites.",
        "Conducted SEO research and implemented on-page optimizations to improve visibility and performance."
      ]
    },
    {
      title: "Hire me to fill this spot! 😉",
      company: "Your Company Name Here",
      date: "Soon, hopefully?",
      bullets: [
        "Will write clean, scalable code for your incredible team.",
        "Ready to build amazing digital experiences from day one."
      ]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <span className="section-badge">EXPERIENCE</span>
        
        <h2 className="section-title">
          My Work <span className="text-cyan">Experience</span>
        </h2>
        
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
