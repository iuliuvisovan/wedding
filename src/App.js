import { useEffect, useState } from 'react';

import NavHearts from './components/NavHearts';
import LandingPage from './components/LandingPage';
import SaveTheDateCard from './components/SaveTheDateCard';
import EventLocation from './components/EventLocation';
import Schedule from './components/Schedule';
import MeetTheGodparents from './components/MeetTheGodparents';

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
        <MeetTheGodparents />
      </CollapsedScreens>
    </div>
  );
}

const CollapsedScreens = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    window.showCollapsedScreens = () => {
      setIsExpanded(true);
    };
  }, []);

  return <div className={'collapsed-screens' + (isExpanded ? '' : ' collapsed')}>{children}</div>;
};
