import React from 'react';
import './Skill.css'; // Assuming you have a separate CSS file for styling

function Skill() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-category">
          <div className="category">
            <span role="img" aria-label="Languages" className="category-icon">&#x1F3A7;</span>
            <h3>Languages</h3>
            <p>Java Full Stack, C, C++, Python</p>
          </div>
          <div className="category">
            <span role="img" aria-label="Web Technologies" className="category-icon">&#x1F4BB;</span>
            <h3>Web Technologies</h3>
            <p>CSS, HTML, PHP, ReactJS, Angular, Javascript, Bootstrap, NodeJS</p>
          </div>
          <div className="category">
            <span role="img" aria-label="Database" className="category-icon">&#x1F4DD;</span>
            <h3>Database</h3>
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
