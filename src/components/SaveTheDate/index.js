import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './styles.css';
import { WITH_ANIMATIONS } from '../../App';
import WereGettingMarried from '../../components/WereGettingMarried';

let playInterval;

export default function SaveTheDate() {
  const videoRef = useRef();
  const [isFlipped, setIsFlipped] = useState(false);

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
    console.log('event', event);
    console.log('window.scrollY', window.scrollY);

    setIsFlipped(window.scrollY > 320);
  };

  return (
    <div className={'card-wrapper'}>
      <div className={'face save-the-date ' + (isFlipped ? 'flipped' : '')}>
        <div className="video-wrapper">
          <video ref={videoRef} src="images/ladybug.mp4" loop muted="muted" playsInline="playsinline"></video>
        </div>

        <img src={`images/save-the-date.png`} />
        <h2>
          17<span className="gold">.</span>05<span className="gold">.</span>2025
        </h2>
        {/* <img src={`images/save-the-date.png`} /> */}
      </div>
      <div className={'face were-getting-married ' + (isFlipped ? 'flipped' : '')}>
        <WereGettingMarried />
      </div>
    </div>
  );
}
