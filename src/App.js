import NavHearts from './components/NavHearts';
import LandingPage from './components/LandingPage';
import SaveTheDate from './components/SaveTheDate';
import EventLocation from './components/EventLocation';
import WereGettingMarried from './components/WereGettingMarried';
import Schedule from './components/Schedule';

export const WITH_ANIMATIONS = true

export default function App() {
  return (
    <div className="App">
      <NavHearts />
      <LandingPage />
      <div className="next-pages">
        <SaveTheDate />
        <WereGettingMarried />
        <Schedule />
        <EventLocation />
      </div>
    </div>
  );
}
