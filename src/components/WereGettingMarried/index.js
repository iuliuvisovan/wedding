import './styles.css';
import Lottie from 'lottie-react';
// import FireworksAnimations from './fireworks.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { WITH_ANIMATIONS } from '../../App';

export default function WereGettingMarried() {
  return (
    <div className="were-getting-married-screen">
      <h2>We're getting</h2>
      <h1>Married!</h1>
      {/* <Lottie animationData={FireworksAnimations} loop={true} /> */}
      {WITH_ANIMATIONS && (
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
