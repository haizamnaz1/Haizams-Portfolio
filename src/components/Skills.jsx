import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "DESIGN",
      name: "Figma",
      tools: "Web Design, Interactive Prototyping, Wireframing",
      color: "pink",
    },
    {
      category: "DEVELOPMENT",
      name: "VS Code",
      tools: "HTML/CSS, JavaScript, React, Next.js",
      color: "purple",
    },
    {
      category: "TOOLS",
      name: "Git & GitHub",
      tools: "Version Control, Collaboration, CI/CD",
      color: "yellow",
    },
    {
      category: "CMS",
      name: "WordPress",
      tools: "Custom Themes, Elementor, PHP Basics",
      color: "green",
    },
    {
      category: "DESIGN",
      name: "Canva",
      tools: "Graphic Design, Social Media Graphics",
      color: "red",
    },
    {
      category: "AI",
      name: "AI Tools",
      tools: "ChatGPT, Midjourney, Claude",
      color: "cyan",
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <span className="section-badge">MY SKILLS</span>
        
        <h2 className="section-title">
          Skills & <span className="text-cyan">Technologies</span>
        </h2>
        
        <p className="skills-desc">
          A comprehensive list of tools and technologies I use to build projects and digital experiences.
        </p>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className={`skill-card bg-${skill.color}`}>
              <div className="skill-category">{skill.category}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-divider"></div>
              <p className="skill-tools">{skill.tools}</p>
              <div className="skill-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
