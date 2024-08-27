import { useEffect, useState } from 'react';
import './styles.css';
import React from 'react';

// map of transforms, which then applied to images:
const transforms = {
  1: 'scale(1.1)',
};

let intervalRef;

export default function LandingPage() {
  // randomly select an image and remove all transforms from it, using react
  // state to force re-render
  const [selectedImageIndex, setSelectedImageIndex] = useState();
  const [secondImageIndex, setSecondImageIndex] = useState();

  useEffect(() => {
    clearInterval(intervalRef);

    intervalRef = setInterval(() => {
      highlightRandomImage();
    }, 500);
  }, []);

  const highlightRandomImage = async () => {
    const randomDuration = Math.floor(Math.random() * 300);

    await wait(randomDuration);

    const randomIndex = Math.floor(Math.random() * 30);

    setSelectedImageIndex(randomIndex);

    const randomIndexTwo = Math.floor(Math.random() * 30);

    await wait(300);

    setSecondImageIndex(randomIndexTwo);
  };

  return (
    <div className="screen-landing-page">
      <div className="backdrop colored"></div>
      <div className="backdrop black"></div>
      <div className="title-and-subtitle">
        <div className="title">
          <div className="and-symbol">&</div>
          <div className="name-word on-top iuliu">Iuliu</div>
          <div className="name-word iuliu">Iuliu</div>
          <div className="name-word on-top gabriela">Gabriela</div>
          <div className="name-word gabriela">Gabriela</div>
        </div>
      </div>
      <div className="images-wrapper">
        {new Array(30).fill(null).map((_, index) => (
          <img
            key={index}
            src={`images/landing/image${index + 1}.jpeg`}
            alt="Iuliu & Gabriela Travelling"
            className={selectedImageIndex === index || secondImageIndex === index ? 'highlighted' : ''}
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
