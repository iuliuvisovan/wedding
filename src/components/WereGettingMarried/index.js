import './styles.css';
import Lottie from 'lottie-react';
// import FireworksAnimations from './fireworks.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function WereGettingMarried() {
  return (
    <div className="were-getting-married">
      <h2>We're getting</h2>
      <h1>Married!</h1>
      {/* <Lottie animationData={FireworksAnimations} loop={true} /> */}
      <div className="animation-wrapper">
        <DotLottieReact
          width="100vw"
          src="https://assets-v2.lottiefiles.com/a/c5e67a64-1150-11ee-958b-972e50a39fec/8k70brgrui.lottie"
          loop
          autoplay
          className='fireworks'
        />
      </div>
    </div>
  );
}
