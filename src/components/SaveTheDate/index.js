import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './styles.css';
import { WITH_ANIMATIONS } from '../../App';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

let playInterval;
let shouldPauseScrollListening = false;

export default function SaveTheDate() {
  const videoRef = useRef();
  const [isFlipped, setIsFlipped] = useState(false);
  const [shouldShowAnimation, setShouldShowAnimation] = useState(false);

  useEffect(() => {
    videoRef.current.playbackRate = 2.2;

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (!WITH_ANIMATIONS) {
      return;
    }

    clearInterval(playInterval);
    playInterval = setInterval(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  // add scroll listener, when it's more than 250px, set state isFlipped to true
  const handleScroll = (event) => {
    if (shouldPauseScrollListening) {
      return;
    }

    console.log('event', event);
    console.log('window.scrollY', window.scrollY);

    const newIsFlipped = window.scrollY > 370 && window.scrollY < 500;
    setIsFlipped(newIsFlipped);

    console.log('newIsFlipped', newIsFlipped);

    if (newIsFlipped && !shouldShowAnimation) {
      shouldPauseScrollListening = true;
      setTimeout(() => {
        setShouldShowAnimation(true);
        shouldPauseScrollListening = false;
      }, 1000);
    } else {
      setShouldShowAnimation(false);
    }

    if (window.scrollY > 500) {
      window.showSchedule();
    }
  };

  return (
    <div className={'card-wrapper'}>
      <div className={'face save-the-date ' + (isFlipped ? 'flipped' : '')}>
        <div className="video-wrapper">
          <video ref={videoRef} src="images/ladybug.mp4" loop muted="muted" playsInline="playsinline"></video>
        </div>

        <img src={`images/save-the-date.png`} alt="Save The Date Text" />
        <h2>
          17<span className="gold">.</span>05<span className="gold">.</span>2025
        </h2>
      </div>
      <div className={'face were-getting-married ' + (isFlipped ? 'flipped' : '')}>
        <div className="were-getting-married-screen">
          <h2>We're getting</h2>
        </div>
      </div>
      {shouldShowAnimation && <h1 className="married">MARRIED</h1>}

      {WITH_ANIMATIONS && shouldShowAnimation && (
        <div className="animation-wrapper">
          <DotLottieReact
            width="100vw"
            src="https://assets-v2.lottiefiles.com/a/b1b163e6-1165-11ee-8de3-13c51904addb/8l4FM0Hz1c.lottie"
            loop
            className="fireworks"
            autoplay
            speed={1}
          />
        </div>
      )}
    </div>
  );
}
