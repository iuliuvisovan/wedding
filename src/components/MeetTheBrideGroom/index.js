import React from 'react';
import './styles.css';

export default function MeetThebridegroom() {
  return (
    <div className="meet-the-bridegroom">
      <div className="content-wrapper">
        <div className="meet">meet the...</div>
        <div className="the-bridegroom">Bride & Groom</div>
        <div className="img-wrapper">
          <div className="top-gradient"></div>
          <img src="images/carousel/1.jpg" alt="The bridegroom" />
          {/* <div className="names">
            <div className="family-name">Visovan</div>
            <div className="first-names">
              <span className="first-name">Ioana</span>
              <span className="and-symbol">&</span>
              <span className="first-name">Tony</span>
            </div>
          </div> */}
          {/* <div className="bottom-gradient"></div> */}
        </div>
      </div>
    </div>
  );
}
