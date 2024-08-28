import NavHearts from './components/NavHearts';
import LandingPage from './components/LandingPage';
import SaveTheDateCard from './components/SaveTheDate';
import EventLocation from './components/EventLocation';
import WereGettingMarried from './components/WereGettingMarried';
import Schedule from './components/Schedule';

export const WITH_ANIMATIONS = false;

export default function App() {
  return (
    <div className="App">
      <NavHearts />
      <LandingPage />
      <SaveTheDateCard />
      <Schedule />
      <EventLocation />
    </div>
  );
}
