import React from 'react';
import './styles.css';

export default function MeetTheGodparents() {
  return (
    <div className="and-the-parents">
      <div className="and-our-beloved">and our beloved</div>
      <div className="parents">Parents</div>
      <div className="names">
        <div className="first-names">
          <span className="first-name">Marius</span>
          <span className="and-symbol">&</span>
          <span className="first-name">Magdalena</span>
        </div>
        <div className="family-name-wrapper">
          <div className="family-name">Visovan</div>
          <div className="comma">,</div>
        </div>
      </div>
      <div className="names">
        <div className="first-names">
          <span className="first-name">Elena</span>
          <span className="and-symbol">&</span>
          <span className="first-name">Gheorghe</span>
        </div>
        <div className="family-name-wrapper">
          <div className="family-name">Lucan</div>
        </div>
      </div>
    </div>
  );
}
