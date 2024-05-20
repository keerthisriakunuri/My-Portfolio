import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Education from './Education';
import Skill from './Skill';
import Experience from './Experience';
import Project from './Project';
import Certification from './Certification';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education/>
      <Skill />
      <Experience />
      <Project />
      <Certification/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;