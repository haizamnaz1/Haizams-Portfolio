import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      badge: "WEB DEVELOPMENT",
      badgeColor: "pink",
      title: "Mira's Collection",
      desc: "An elegant e-commerce platform designed for a premium clothing brand. Built with modern web technologies.",
      tags: ["React", "Stripe", "Figma"],
      icon: ""
    },
    {
      badge: "UI/UX DESIGN",
      badgeColor: "purple",
      title: "SkillShare Platform",
      desc: "Concept redesign for an online learning platform, focusing on user engagement and accessibility.",
      tags: ["UI Design", "Figma", "Research"],
      icon: ""
    },
    {
      badge: "FULLSTACK",
      badgeColor: "cyan",
      title: "CoreAscent",
      desc: "A comprehensive dashboard application for managing internal employee resources and goals.",
      tags: ["Next.js", "MySQL", "Tailwind"],
      icon: ""
    },
    {
      badge: "WEB DEVELOPMENT",
      badgeColor: "green",
      title: "Strive Beam SEO",
      desc: "Marketing website optimized for SEO and performance for an independent agency.",
      tags: ["WordPress", "SEO", "Performance"],
      icon: ""
    }
  ];

  return (
    <section id="work" className="projects section-padding">
      <div className="container">
        <span className="section-badge">MY WORK</span>
        
        <h2 className="section-title">
          Featured <span className="text-purple">Work</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className={`project-badge badge-${project.badgeColor}`}>
                  {project.badge}
                </span>
                <div className="project-link-icon">↗</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-icon">{project.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
