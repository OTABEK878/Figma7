import React from 'react';
import { voicesData } from '../data/voiceData';
import './voices.css';

const Voices = () => {
  return (
    <div className="voices-container">
      <h2 className="voices-title">Student Voices</h2>
      <div className="voices-grid">
        {voicesData.map((voice) => (
          <div key={voice.id} className="voice-card">
            <img src={voice.image} alt={voice.name} className="voice-img" />
            <h3>{voice.name}, <span>{voice.role}</span></h3>
            <p>"{voice.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voices;
