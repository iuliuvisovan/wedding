import { useEffect, useState } from 'react';

import NavHearts from './components/NavHearts';
import LandingPage from './components/LandingPage';
import SaveTheDateCard from './components/SaveTheDateCard';
import MeetTheBrideGroom from './components/MeetTheBrideGroom';
import MeetTheGodparents from './components/MeetTheGodparents';
import EventLocation from './components/EventLocation';
import Schedule from './components/Schedule';
import AndTheParents from './components/AndTheParents';
import CountdownTimer from './components/CountdownTimer';
import Summary from './components/Summary';
import LetsParty from './components/LetsParty';

export const WITH_ANIMATIONS = true;

export default function App() {
  return (
    <div className="App">
      <NavHearts />
      <LandingPage />
      <SaveTheDateCard />
      <CollapsedScreens>
        <Schedule />
        <EventLocation />
        <MeetTheBrideGroom />
        <MeetTheGodparents />
        <AndTheParents />
        <LetsParty />
        <CountdownTimer />
        <span className="left-until">left until...</span>
        <Summary />
        <span style={{ display: 'inline-block', fontSize: 12, lineHeight: '20px', marginTop: 80, marginBottom: 24 }}>
          Developed with 💛 by the groom <br />
          Creative inspiration by the bride
        </span>
      </CollapsedScreens>
    </div>
  );
}

const CollapsedScreens = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(!WITH_ANIMATIONS);

  useEffect(() => {
    window.showCollapsedScreens = () => {
      setIsExpanded(true);
    };
  }, []);

  return <div className={'collapsed-screens' + (isExpanded ? '' : ' collapsed')}>{children}</div>;
};
