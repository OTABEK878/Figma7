import React from 'react';
import './cards.css';
import { cardData } from '../data/cardsData';

const Cards = () => {
  return (
    <div className="cards-container">
      {cardData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div className="card" key={index}>
            <div className="card-icon"><Icon /></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
