import React from 'react';
import './styles.css';

export default function MeetTheGodparents() {
  return (
    <div className="and-the-parents">
      <img src="images/laurel.png" className="laurel top" alt="Laurels" />
      <img src="images/laurel.png" className="laurel middle" alt="Laurels" />
      <img src="images/laurel.png" className="laurel bottom" alt="Laurels" />
      <div className="content-wrapper">
        <div className="and-our-beloved">and our beloved</div>
        <div className="parents">Parents</div>
        <div className="names" style={{ marginTop: 100 }}>
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

        <div className="names" style={{ marginTop: 60 }}>
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
    </div>
  );
}
