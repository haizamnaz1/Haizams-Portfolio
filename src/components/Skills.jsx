import React from 'react';
import { motion } from 'framer-motion';
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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.span 
          className="section-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          MY SKILLS
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & <span className="text-cyan">Technologies</span>
        </motion.h2>
        
        <motion.p 
          className="skills-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A comprehensive list of tools and technologies I use to build projects and digital experiences.
        </motion.p>
        
        <motion.div 
          className="skills-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className={`skill-card bg-${skill.color} hover-glow ${index % 2 === 0 ? 'float-slow' : 'float-mid'}`}
              variants={cardVariants}
            >
              <div className="skill-category">{skill.category}</div>
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <img src={`/logos/${skill.logo}`} alt={skill.name} className="skill-logo-img" />
              </div>
              <div className="skill-divider"></div>
              <p className="skill-tools">{skill.tools}</p>
              <div className="skill-arrow">↗</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
