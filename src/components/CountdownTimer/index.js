import React from 'react';
import './styles.css';

export default function CountdownTimer() {
  return (
    <div className="countdown-timer">
      <div className="square">
        <div className="value">212</div>
        <div className="label">D</div>
      </div>
      <div className="square">
        <div className="value">14</div>
        <div className="label">H</div>
      </div>
      <div className="square">
        <div className="value">39</div>
        <div className="label">m</div>
      </div>
      <div className="square" style={{ boxShadow: 'none' }}>
        <div className="value">46</div>
        <div className="label">s</div>
      </div>
    </div>
  );
}
