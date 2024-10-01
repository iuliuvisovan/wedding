import React from 'react';
import './styles.css';
import 'add-to-calendar-button/unstyle';

export default function Summary() {
  return (
    <div className="summary">
      <div className="card">
        <div className="section" style={{ transform: 'translateY(-4px)' }}>
          <div className="title">Iuliu & Gabriela's</div>
          <div className="wedding">Wedding</div>
        </div>
        <div className="section" style={{ marginTop: 16 }}>
          <div className="date">17 May, 2025</div>
          <div className="location">Cluj-Napoca, Romania</div>
        </div>
        <div className="section button-section">
          <add-to-calendar-button
            name="💍 Nuntă Iuliu & Gabriela"
            description="💛 17 Mai, 2025 💛"
            startDate="2025-05-17"
            location="Elitis Events Center | str. Făgetului 74, Cluj-Napoca, Romania"
            options="['Google']"
            timeZone="Europe/Bucharest"
            trigger="click"
            inline
            hideIconButton
            hideCheckmark
            buttonStyle="none"
            iCalFileName="Iuliu-Gabriela-Wedding"
          />
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
