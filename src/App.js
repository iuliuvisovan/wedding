import NavHearts from './components/NavHearts';
import LandingPage from './components/LandingPage';
import SaveTheDateCard from './components/SaveTheDate';
import EventLocation from './components/EventLocation';
import Schedule from './components/Schedule';

export const WITH_ANIMATIONS = true;

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
