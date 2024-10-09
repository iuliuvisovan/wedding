import React, { useState } from 'react';
import './styles.css';
import Carousel from 'react-simply-carousel';

export default function MeetTheBridegroom() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="meet-the-bridegroom">
      <div className="content-wrapper">
        <div className="meet">meet the...</div>
        <div className="the-bridegroom">Bride & Groom</div>
        <div className="img-wrapper">
          <div className="top-gradient"></div>
          <Carousel
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            onRequestChange={setActiveSlide}
            itemsToShow={2}
            speed={400}
            centerMode
            backwardBtnProps={{ style: { display: 'none' } }}
            forwardBtnProps={{ style: { display: 'none' } }}
            
          >
            {Array.from({ length: 6 }).map((item, index) => (
              <img key={index} src={`images/carousel/${index + 1}.jpg`} alt="The bridegroom" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
