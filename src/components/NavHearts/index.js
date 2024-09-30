import React, { useState, useEffect } from 'react';
import './styles.css';
import { ReactComponent as HeartIcon } from './heart.svg';

const checkpoints = [0, 330, 1055, 1900, 2500];

export default function NavHearts() {
  const [activeHeart, setActiveHeart] = useState(0);

  useEffect(() => {
    const computeActiveHeart = () => {
      const scrollPosition = window.scrollY;

      // Determine the active checkpoint
      let activeIndex = 0;
      for (let i = 0; i < checkpoints.length; i++) {
        if (scrollPosition >= checkpoints[i]) {
          activeIndex = i;
        } else {
          break;
        }
      }

      setActiveHeart(activeIndex);
    };

    window.addEventListener('scroll', computeActiveHeart);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', computeActiveHeart);
    };
  }, []);

  return (
    <>
      {/* <div className="hearts-gradient"></div> */}
      <div className="hearts-navigation">
        {new Array(5).fill(null).map((_, index) => (
          <div key={index} className={'heart' + (index === activeHeart ? ' selected' : '')}>
            <HeartIcon />
          </div>
        ))}
      </div>
    </>
  );
}
