import NavHearts from './components/NavHearts';
import LandingPage from './components/LandingPage';
import SaveTheDate from './components/SaveTheDate';
import EventLocation from './components/EventLocation';
import ScreenFour from './components/ScreenFour';

export default function App() {
  return (
    <div className="App">
      <NavHearts />
      <LandingPage />
      <div className="next-pages">
        <SaveTheDate />
        <EventLocation />
        <ScreenFour />
      </div>
    </div>
  );
}
