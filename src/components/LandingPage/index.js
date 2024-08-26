import { useEffect, useState } from 'react';
import './styles.css';
import React from 'react';

// map of transforms, which then applied to images:
const transforms = {
  1: 'scale(1.1)',
};

export default function LandingPage() {
  // randomly select an image and remove all transforms from it, using react
  // state to force re-render
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    colorizeRandomImage();
  }, []);

  const colorizeRandomImage = async () => {
    const randomIndex = Math.floor(Math.random() * 30);

    setSelectedImageIndex(randomIndex);
    const randomDuration = Math.floor(Math.random() * 3000);
    await wait(randomDuration);
    colorizeRandomImage();
  };

  return (
    <div className="screen-landing-page">
      <div className="backdrop"></div>
      <div className="title-and-subtitle">
        <div className="title">
          <div className="and-symbol">&</div>
          <div className="name-word">Iuliu</div>
          <div className="name-word">Gabriela</div>
        </div>
      </div>
      <div className="images-wrapper">
        {new Array(30).fill(null).map((_, index) => (
          <img
            key={index}
            src={`images/landing/image${index + 1}.jpeg`}
            alt="Iuliu & Gabriela Travelling"
            className={selectedImageIndex === index ? 'nofilter' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export function wait(waitTimeInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitTimeInMs);
  });
}
