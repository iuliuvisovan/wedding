import { useEffect } from 'react';
import { useRef } from 'react';
import './styles.css';

export default function SaveTheDate() {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 2;

    setInterval(() => {
      videoRef.current.play();
    }, 2000);
  }, []);

  return (
    <div className="screen-two">
      <div className="video-wrapper">
        <video ref={videoRef} src="images/ladybug-cut.mp4" loop muted="muted" playsInline="playsinline"></video>
      </div>

      <img src={`images/save-the-date.png`} />
      <h2>
        17<span className="gold">.</span>05<span className="gold">.</span>2025
      </h2>
      {/* <img src={`images/save-the-date.png`} /> */}
    </div>
  );
}
