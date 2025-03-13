import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className={`nav-left ${isMenuOpen ? "active" : ""}`}>
          <li>Welcome</li>
          <li>Courses</li>
          <li>Instructors</li>
        </ul>

        <div className="nav-center">
          <img src="./img/Icon (4).png" alt="EduInspire Logo" className="nav-logo" />
          <span>EduInspire</span>
        </div>

        <ul className={`nav-right ${isMenuOpen ? "active" : ""}`}>
          <li>Overview</li>
          <li>@eduinspire</li>
          <li>Get in Touch</li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <div className="hero-card">
        <h1>Unlock Your Potential</h1>
        <p>Explore Top Courses</p>
        <div className="hero-buttons">
          <button className="btn-primary">Start Learning</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
