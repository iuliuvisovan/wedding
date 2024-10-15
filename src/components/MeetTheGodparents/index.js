import React from 'react';
import './styles.css';

export default function MeetTheGodparents() {
  return (
    <div className="meet-the-godparents">
      <div className="content-wrapper">
        <div className="meet">meet...</div>
        <div className="the-godparents">The Godparents</div>
        <div className="img-wrapper">
          <div className="top-gradient"></div>
          <img src="images/the-godparents.jpeg" alt="The godparents" className="only-mobile" />
          <img src="images/the-godparents-desktop.jpeg" alt="The godparents" className="only-desktop" />
          <div className="names">
            <div className="family-name">Branic</div>
            <div className="first-names">
              <span className="first-name">Ioana</span>
              <span className="and-symbol">&</span>
              <span className="first-name">Tony</span>
            </div>
          </div>
          <div className="names on-top">
            <div className="family-name">Branic</div>
            <div className="first-names">
              <span className="first-name">Ioana</span>
              <span className="and-symbol">&</span>
              <span className="first-name">Tony</span>
            </div>
          </div>
          <div className="bottom-gradient"></div>
        </div>
      </div>
    </div>
  );
}
