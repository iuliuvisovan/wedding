import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Carousel from 'react-simply-carousel';

export default function MeetTheBridegroom() {
  const [activeSlide, setActiveSlide] = useState(0);
  const randomInterval = useRef(null);

  useEffect(() => {
    console.log('setting interval');

    randomInterval.current = window.setInterval(() => {
      setActiveSlide(+new Date() % 5);
    }, 2000);

    return () => {
      window.clearInterval(randomInterval.current);
    };
  }, []);

  return (
    <div className="meet-the-bridegroom">
      <div className="content-wrapper">
        <div className="meet">meet the...</div>
        <div className="the-bridegroom">Bride & Groom</div>
        <div
          className="img-wrapper"
          onTouchStart={() => {
            window.clearInterval(randomInterval.current);
          }}
        >
          <div className="top-gradient"></div>
          <Carousel
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            onRequestChange={(slide) => {
              setActiveSlide(slide);
              console.log('changed');
            }}
            itemsToShow={2}
            speed={300}
            infinite
            backwardBtnProps={{ style: { display: 'none' } }}
            forwardBtnProps={{ style: { display: 'none' } }}
            easing="ease-in-out"
            updateOnItemClick={window.innerWidth > 768}
          >
            {Array.from({ length: 6 }).map((item, index) => (
              <img loading="lazy" key={index} src={`images/carousel/image${index + 1}.jpeg`} alt="The bridegroom" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
