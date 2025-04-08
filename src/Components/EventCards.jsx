import React, { useState } from 'react';
import './EventCards.css';

function EventCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const topCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9 8 11 9 11 10 11" />
        </svg>
      ),
      title: 'Performances',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12.75l3-3.5 3.5 3.5 2.5-2.5 3.5 3.5 3-3.5l-3.5-3.5 2.5-2.5-3.5 3.5-3-3.5z" />
          <path d="M12 10.5l-3.5 3.5-3-3.5 3.5-3.5 3-3.5 3.5 3.5-3.5 3.5z" />
        </svg>
      ),
      title: 'Workshops',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l-10 10h3v8h14v-8h3z" />
        </svg>
      ),
      title: 'Exhibitions',
    },
  ];

  const bottomCards = [
    {
      title: 'Sports',
      description: 'Host exciting sports tournaments and activities for your audience.',
    },
    {
      title: 'Conferences',
      description: 'Plan corporate conferences and meetings effortlessly.',
    },
    {
      title: 'Parties',
      description: 'Throw unforgettable parties and celebrations for any occasion.',
    },
  ];

  return (
    <div className="event-cards-container">
      <h1 className="host-title">WHAT DO YOU HOST?</h1>

      <div className="top-cards">
        {topCards.map((card, index) => (
          <div
            key={index}
            className="event-card"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      <div className="bottom-cards">
        {bottomCards.map((card, index) => (
          <div key={index} className="event-card with-description">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCards;
