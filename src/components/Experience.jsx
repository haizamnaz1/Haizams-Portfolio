import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Intern Web Developer",
      company: "StriveBeam",
      date: "Jan 2025 - Jun 2025",
      cert: "/certificates/strivebeam-internship.pdf",
      bullets: [
        "Collaborated with the team to research and define effective color themes for client websites.",
        "Conducted SEO research and implemented on-page optimizations to improve visibility and performance."
      ]
    },
    {
      title: "Hire me to fill this spot! 😉",
      company: "Your Company Name Here",
      date: "Soon, hopefully?",
      cert: null,
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
