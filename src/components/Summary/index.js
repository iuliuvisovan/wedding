import React from 'react';
import './styles.css';

export default function Summary() {
  return (
    <div className="summary">
      <div className="card">
        <div className="section">
          <div className="title">Iuliu & Gabriela's</div>
          <div className="wedding">Wedding</div>
        </div>
        <div className="section">
          <div className="date">17 May, 2025</div>
          <div className="location">Cluj-Napoca, Romania</div>
        </div>
        <div className="section button-section">
          <div className="add-to-calendar-button">Add to Calendar</div>
        </div>
        <img
          className="bg-image"
          src="https://elitiscenter.ro/wp-content/uploads/2024/03/Elitis-Sali-De-Nunta-5.png"
          alt="Elitis Events Center"
        />
      </div>
    </div>
  );
}
