import { useEffect, useState } from 'react';
import './styles.css';
import React from 'react';
import { WITH_ANIMATIONS } from '../../App';

let intervalRef;

const NUMBER_OF_IMAGES = 33;
export default function LandingPage() {
  // randomly select an image and remove all transforms from it, using react
  // state to force re-render
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  useEffect(() => {
    if (!WITH_ANIMATIONS) {
      return;
    }
    // Wait for initial animations to complete
    setTimeout(() => {
      clearInterval(intervalRef);

      intervalRef = setInterval(() => {
        highlightRandomImage();
      }, 2000);
    }, 3000);
  }, []);

  const highlightRandomImage = async () => {
    const randomDuration = Math.floor(Math.random() * 500);

    await wait(randomDuration);

    const randomIndex = Math.floor(Math.random() * NUMBER_OF_IMAGES);

    setSelectedImageIndex(randomIndex);
  };

  return (
    <>
      {WITH_ANIMATIONS && <div className="backdrop black"></div>}
      <div className="screen-landing-page">
        <div className="plane-wrapper">
          <img src={`images/plane.png`} alt="Iuliu & Gabriela Travelling in a Small Cute Plane" className="plane" />
        </div>
        <div className="title-and-subtitle">
          <div className="title">
            <div className="and-symbol">&</div>
            <div className="name-word on-top iuliu">Iuliu</div>
            <div className="name-word iuliu" onClick={() => window.open('https://www.instagram.com/iuliu_', '_blank')}>
              Iuliu
            </div>
            <div className="name-word on-top gabriela">Gabriela</div>
            <div className="name-word gabriela" onClick={() => window.open('https://www.instagram.com/lucan.gabriela', '_blank')}>
              Gabriela
            </div>
          </div>
        </div>
        <div className="images-wrapper">
          {new Array(NUMBER_OF_IMAGES + (window.innerWidth < 768 ? 0 : window.innerWidth > 1400 ? 50 : 15)).fill(null).map((_, index) => (
            <img
              key={index}
              src={`images/landing/image${(index % NUMBER_OF_IMAGES) + 1}.jpeg`}
              alt="Iuliu & Gabriela Travelling"
              className={selectedImageIndex === index ? 'highlighted' : ''}
            />
          ))}
        </div>
        <div className="bottom-gradient"></div>
      </div>
    </>
  );
}

export function wait(waitTimeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitTimeInMs);
  });
}
