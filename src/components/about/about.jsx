import React from 'react';
import './about.css';
import instructors from '../data/aboutData';

const About = () => {
  return (
    <div className="about-container">
      <h1>Knowledge Awaits You</h1>
      <p>Select Your Learning Path</p>

      <div className="instructor-grid">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="instructor-card">
            <img src={instructor.img} alt={instructor.name} className="instructor-img" />
            <h3>{instructor.name}</h3>
            <p>{instructor.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
