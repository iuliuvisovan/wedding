import './styles.css';
import { ReactComponent as HeartIcon } from './heart.svg';
import { useEffect, useState } from 'react';

export default function Schedule() {
  const [isShowingSchedule, setIsShowingSchedule] = useState(false);

  useEffect(() => {
    window.showSchedule = () => {
      setIsShowingSchedule(true);
    };
  }, []);

  return (
    <div className="schedule-screen" style={{ opacity: isShowingSchedule ? 1 : 0 }}>
      <div className="top-gradient"></div>

      <div className="timeline">
        <div className="line-through-hearts"></div>
        <div className="schedule-item">
          <div className="hour">
            <HeartIcon />
            <span>13:00</span>
          </div>
          <div className="event-info">
            <span className="title">Civil Ceremony</span>
            <span className="location">
              <img src="https://www.svgrepo.com/show/127575/location-sign.svg" /> Parcul Central, Cluj-Napoca
            </span>
          </div>
        </div>
        <div className="schedule-item">
          <div className="hour">
            <HeartIcon />
            <span>14:30</span>
          </div>
          <div className="event-info">
            <span className="title">Religious Ceremony</span>
            <span className="location">
              <img src="https://www.svgrepo.com/show/127575/location-sign.svg" /> Elitis Events Center, Cluj-Napoca
            </span>
          </div>
        </div>
        <div className="schedule-item">
          <div className="hour">
            <HeartIcon />
            <span>16:00</span>
          </div>
          <div className="event-info">
            <span className="title">Wedding Party</span>
            <span className="location">
              <img src="https://www.svgrepo.com/show/127575/location-sign.svg" /> Elitis Events Center, Cluj-Napoca
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
