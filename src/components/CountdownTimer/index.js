import React, { useState, useEffect } from 'react';
import './styles.css';

function AnimatedUnit({ value, label }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [prevValue, setPrevValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setPrevValue(displayValue);
      setIsAnimating(true);

      // Start animation
      const timeout = setTimeout(() => {
        // After animation, update the displayed value
        setIsAnimating(false);
        setDisplayValue(value);
      }, 900); // Duration of the animation

      return () => clearTimeout(timeout);
    }
  }, [value, displayValue]);

  return (
    <div className="square">
      <div className="top-gradient"></div>

      <div className="flip-container">
        {isAnimating ? (
          <>
            <div className="value prev">{prevValue}</div>
            <div className="value next">{value}</div>
          </>
        ) : (
          <div className="value">{displayValue}</div>
        )}
      </div>
      <div className="label">{label}</div>
      <div className="bottom-gradient"></div>
    </div>
  );
}

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-05-17') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer">
      <AnimatedUnit value={timeLeft.days || 0} label="days" />
      <AnimatedUnit value={timeLeft.hours || 0} label="hours" />
      <AnimatedUnit value={timeLeft.minutes || 0} label="minutes" />
      <AnimatedUnit value={timeLeft.seconds || 0} label="seconds" />
    </div>
  );
}
