import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './styles.css';
import { WITH_ANIMATIONS } from '../../App';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

let playInterval;
let confettiInterval;
let showCardTimeout;
let shouldPauseScrollListening = false;

const AUTO_FLIP_POINT = window.innerHeight / 1.8;
const FLIP_UNDO_POINT = AUTO_FLIP_POINT + 270;
const CONFETTI_TIMEOUT = 1000;

export default function SaveTheDate() {
  const videoRef = useRef();
  const [isFlipped, setIsFlipped] = useState(false);
  const [showsConfetti, setShowsConfetti] = useState(false);
  const [showsMarried, setShowsMarried] = useState(false);
  const [isPastRevertOffset, setIsPastRevertOffset] = useState(false);
  const [shouldHideBecause, setShouldHideBecause] = useState(false);

  useEffect(() => {
    videoRef.current.playbackRate = 2.2;

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (!WITH_ANIMATIONS) {
      return;
    }

    clearInterval(playInterval);
    playInterval = setInterval(() => {
      videoRef.current.play();
    }, 7000);
  }, []);

  // add scroll listener, when it's more than 250px, set state isFlipped to true
  const handleScroll = async (event) => {
    if (shouldPauseScrollListening || !WITH_ANIMATIONS) {
      return;
    }

    maybeShowCard();
    maybeHideCard();
  };

  const maybeHideCard = () => {
    if (window.scrollY > FLIP_UNDO_POINT) {
      setIsPastRevertOffset(true);
      setIsFlipped(false);
      shouldPauseScrollListening = true;
      window.removeEventListener('scroll', handleScroll);
    }
  };

  const maybeShowCard = () => {
    if (window.scrollY > AUTO_FLIP_POINT && !isFlipped) {
      if (showCardTimeout) {
        return;
      }

      shouldPauseScrollListening = true;
      showCardTimeout = setTimeout(() => {
        setIsFlipped(true);
        setShouldHideBecause(true);
        shouldPauseScrollListening = false;
      }, 2500);
    }
  };

  useEffect(() => {
    if (isFlipped) {
      shouldPauseScrollListening = true;
      confettiInterval = setTimeout(() => {
        setShowsConfetti(true);
        setShowsMarried(true);
        setTimeout(() => {
          setShowsConfetti(false);
        }, 3500);
        shouldPauseScrollListening = false;
      }, CONFETTI_TIMEOUT);

      // If the user has flipped or the automatic flip has happened
      // show the hidden screen
      if (!window.areCollapsedScreenShown) {
        setTimeout(() => {
          window.showCollapsedScreens();
          window.areCollapsedScreenShown = true;
        }, 4500);
      }
    } else {
      setShowsConfetti(false);
      setShowsMarried(false);
      clearTimeout(confettiInterval);
    }
  }, [isFlipped]);

  return (
    <div className={'card-wrapper'} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={'face save-the-date ' + (isFlipped ? 'flipped' : '')}>
        <div className="video-wrapper">
          <video ref={videoRef} src="images/ladybug.mp4" loop muted="muted" playsInline="playsinline"></video>
        </div>

        <img src={`images/save-the-date.png`} alt="Save The Date Text" />
        <h2>
          17<span className="gold">.</span>05<span className="gold">.</span>2025
        </h2>
        {!shouldHideBecause && (
          <h4>
            because
            <span className="dots-wrapper">
              <div className="dots">...</div>
            </span>
          </h4>
        )}
      </div>
      <div className={'face were-getting-married ' + (isFlipped ? 'flipped' : '')}>
        <div className="were-getting-married-screen">
          <span>we're getting</span>
        </div>
      </div>
      {showsMarried && <h1 className="married">MARRIED</h1>}
      {WITH_ANIMATIONS && showsConfetti && (
        <div className="animation-wrapper">
          <DotLottieReact width="100%" src="images/fireworks.lottie" loop className="fireworks" autoplay speed={1} />
        </div>
      )}
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
