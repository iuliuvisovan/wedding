import { useEffect, useState } from 'react';

import NavHearts from './components/NavHearts';
import LandingPage from './components/LandingPage';
import SaveTheDateCard from './components/SaveTheDateCard';
import EventLocation from './components/EventLocation';
import Schedule from './components/Schedule';
import MeetTheGodparents from './components/MeetTheGodparents';
import AndTheParents from './components/AndTheParents';
import Summary from './components/Summary';

export const WITH_ANIMATIONS = false;

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
        <AndTheParents />
        <Summary />
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
