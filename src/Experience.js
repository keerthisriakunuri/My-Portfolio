import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="job">
          <h3>Java Developer Intern</h3>
          <p>May 2022 - October 2022</p>
          <p>SmartTree, Bangalore, India</p>
          <ul>
            <li>Participated in the full software development lifecycle, including requirements gathering, design, coding, testing, and deployment, contributing to the development of a feature-rich Java application.</li>
            <li>Engaged in code reviews and provided constructive feedback to peers, fostering a collaborative and learning-oriented environment that improved overall code quality and efficiency.</li>
            <li>Created responsive web pages using Bootstrap and wrote client-side applications in a clean MVC model using Angular JS.</li>
            <li>Upgraded existing User Interface with HTML5, CSS3, and Bootstrap, Angular 12, ReactJS.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Network Engineer Intern</h3>
          <p>December 2022 - May 2023</p>
          <p>Movate, Remote</p>
          <ul>
            <li>Completed a valuable 5-month network internship at Movate, gaining hands-on experience and expertise in network management and operations.</li>
            <li>Assisted in configuring and maintaining network devices such as routers, switches, and firewalls.</li>
            <li>Contributed to the setup and management of VLANs, subnetting, and routing protocols.</li>
            <li>Monitored network performance and identified and resolved connectivity issues.</li>
            <li>Collaborated with the network team to troubleshoot and resolve network outages and latency problems.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Java Full Stack Intern</h3>
          <p>Present - 2024</p>
          <p>Codegnan IT Solutions</p>
          <ul>
            <li>Actively participating in the front-end development of Java-based online apps, utilizing the Angular and React frameworks.</li>
            <li>Working collaboratively with team members to leverage HTML, CSS, JavaScript, React, and Angular to design and construct compelling user interfaces.</li>
            <li>Utilizing Java frameworks like Spring Boot to implement strong server-side functionality and RESTful APIs, guaranteeing smooth front-end technology integration.</li>
            <li>Employing Hibernate to effortlessly integrate databases into applications while preserving effective data management along the entire stack.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
