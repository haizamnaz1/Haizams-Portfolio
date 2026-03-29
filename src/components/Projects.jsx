import React from 'react';
import './Projects.css';

import mirasImg from '../assets/project showcase/miras hero.png';
import skillshareImg from '../assets/project showcase/skillshare hero.png';
import coreacsentImg from '../assets/project showcase/coreacsent hero.png';
import gymsiteImg from '../assets/project showcase/gymsite hero.png';
import everlaneImg from '../assets/project showcase/everlane hero.png';
import miraRedefinedImg from '../assets/project showcase/mira but redifned hero.png';

const Projects = () => {
  const projectsData = [
    {
      badge: "WEB DEVELOPMENT",
      badgeColor: "pink",
      title: "Mira's Collection",
      desc: "An elegant e-commerce platform designed for a premium clothing brand. Built with modern web technologies.",
      tags: ["React", "Stripe", "Figma"],
      image: mirasImg
    },
    {
      badge: "UI/UX DESIGN",
      badgeColor: "purple",
      title: "SkillShare Platform",
      desc: "Concept redesign for an online learning platform, focusing on user engagement and accessibility.",
      tags: ["UI Design", "Figma", "Research"],
      image: skillshareImg
    },
    {
      badge: "FULLSTACK",
      badgeColor: "cyan",
      title: "CoreAscent",
      desc: "A comprehensive dashboard application for managing internal employee resources and goals.",
      tags: ["Next.js", "MySQL", "Tailwind"],
      image: coreacsentImg
    },
    {
      badge: "WEB DEVELOPMENT",
      badgeColor: "green",
      title: "Strive Beam SEO",
      desc: "Marketing website optimized for SEO and performance for an independent agency.",
      tags: ["WordPress", "SEO", "Performance"],
      image: gymsiteImg
    },
    {
      badge: "UI/UX DESIGN",
      badgeColor: "purple",
      title: "Everlane Redesign",
      desc: "Elevating the e-commerce experience with minimalist aesthetics and improved UX.",
      tags: ["Figma", "Prototyping", "UX"],
      image: everlaneImg
    },
    {
      badge: "WEB DEVELOPMENT",
      badgeColor: "pink",
      title: "Mira Redefined",
      desc: "A complete structural overhaul of the Mira brand platform, optimizing for global scale and sleek transitions.",
      tags: ["React", "Performance", "Scale"],
      image: miraRedefinedImg
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <span className="section-badge">MY WORK</span>
        
        <h2 className="section-title">
          Featured <span className="text-purple">Work</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card hover-glow">
              <img src={project.image} alt={project.title} className="project-image" />
              
              <div className="project-overlay">
                <div className="project-overlay-top">
                  <h3 className="project-title-overlay">{project.title}</h3>
                  <p className="project-desc-overlay">{project.desc}</p>
                </div>
                
                <div className="project-overlay-bottom">
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag-overlay">{tag}</span>
                    ))}
                  </div>
                  <div className="project-link-icon-overlay">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="project-card more-card hover-glow">
            <div className="more-card-content">
              <h3>Many more to come!</h3>
              <p>I'm continually working on new ideas, studying, and experimenting.</p>
              <div className="dots-container">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
