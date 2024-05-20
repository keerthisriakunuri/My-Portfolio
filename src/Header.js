import React from 'react';
import './Header.css';

function Header() {
  return (
    
    <header className="header">
      <h1><img src="https://p.kindpng.com/picc/s/650-6505735_welcome-to-my-portfolio-circle-hd-png-download.png" alt="por" width="5%" height="5%"/>MY PORTFOLIO</h1>
      <nav className="nav">
        <ul className="nav__list">
        <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
          <a href="#education" className="nav__link">Education</a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">Projects</a>
          </li>
          <li className="nav__item">
            <a href="#experience" className="nav__link">Experience</a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">Skill</a>
          </li>
          <li className="nav__item">
            <a href="#certification" className="nav__link">Certification</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header__content">
        <img src="https://media.licdn.com/dms/image/D5603AQGkU1cA-WVaQQ/profile-displayphoto-shrink_200_200/0/1693151319116?e=2147483647&v=beta&t=vhymSmjO46yBIxYhJ6wWs5qX8lV81BV4xkA8Fk4anAc" alt="poto" width="20%" height="20%"/>
        <h1 className="header__title">AKUNURI KEERTHI SRI</h1>
        <p className="header__subtitle">Full Stack Developer</p>
      </div>
      
    </header>
  );
}

export default Header;