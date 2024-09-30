import React from 'react';
import './styles.css';

export default function Summary() {
  return (
    <div className="summary">
      <div className="countdown-timer">
        <div className="square">
          <div className="value">212</div>
          <div className="label">D</div>
        </div>
        <div className="square">
          <div className="value">14</div>
          <div className="label">H</div>
        </div>
        <div className="square">
          <div className="value">39</div>
          <div className="label">m</div>
        </div>
        <div className="square" style={{ boxShadow: 'none' }}>
          <div className="value">46</div>
          <div className="label">s</div>
        </div>
      </div>
      <div className="card">
        <div className="section">
          <div className="title">Iuliu & Gabriela's</div>
          <div className="wedding">Wedding</div>
        </div>
        <div className="section" style={{ marginTop: 8 }}>
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
