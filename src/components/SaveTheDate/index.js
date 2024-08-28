import { useEffect } from 'react';
import { useRef } from 'react';
import './styles.css';

let playInterval;

export default function SaveTheDate() {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 2;

    clearInterval(playInterval);
    playInterval = setInterval(() => {
      videoRef.current.play();
      // setTimeout(() => {
      //   videoRef.current.pause();
      // }, 6933);
    }, 6000);
  }, []);

  return (
    <div className="save-the-date-screen">
      <div className="video-wrapper">
        <video ref={videoRef} src="images/ladybug.mp4" loop muted="muted" playsInline="playsinline"></video>
      </div>

      <img src={`images/save-the-date.png`} />
      <h2>
        17<span className="gold">.</span>05<span className="gold">.</span>2025
      </h2>
      {/* <img src={`images/save-the-date.png`} /> */}
    </div>
  );
}
