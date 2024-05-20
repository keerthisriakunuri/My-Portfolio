import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>
            Developed and executed an innovative data visualization project using Tableau to map the locations of prestigious educational institutions (NITs and IITs), resulting in a 20% increase in student applications and a 15% boost in overall enrollment.
          </p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>
            Implementing advanced image steganography techniques to securely conceal and convey data within digital images, ensuring data privacy and security.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
