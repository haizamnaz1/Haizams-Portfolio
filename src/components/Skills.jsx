import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "DESIGN",
      name: "Figma",
      tools: "Web Design, Interactive Prototyping, Wireframing",
      color: "pink",
      logo: "figma logo.png"
    },
    {
      category: "DEVELOPMENT",
      name: "VS Code",
      tools: "HTML/CSS, JavaScript, React, Next.js",
      color: "purple",
      logo: "vscode logo.png"
    },
    {
      category: "TOOLS",
      name: "Git & GitHub",
      tools: "Version Control, Collaboration, CI/CD",
      color: "yellow",
      logo: "github logo.png"
    },
    {
      category: "CMS",
      name: "WordPress",
      tools: "Custom Themes, Elementor, PHP Basics",
      color: "green",
      logo: "wordpress logo.png"
    },
    {
      category: "DESIGN",
      name: "Canva",
      tools: "Graphic Design, Social Media Graphics",
      color: "red",
      logo: "canva logo.png"
    },
    {
      category: "AI",
      name: "AI Tools",
      tools: "ChatGPT, Midjourney, Claude",
      color: "cyan",
      logo: "chatgpt logo.png"
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
            <div 
              key={index} 
              className={`skill-card bg-${skill.color} hover-glow ${index % 2 === 0 ? 'float-slow' : 'float-mid'}`}
            >
              <div className="skill-category">{skill.category}</div>
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <img src={`/logos/${skill.logo}`} alt={skill.name} className="skill-logo-img" />
              </div>
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
