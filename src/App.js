import './App.css';
import LandingPage from './components/LandingPage';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import NavHearts from './components/NavHearts';

export default function App() {
  return (
    <div className="App">
      <NavHearts />
      <LandingPage />
      <div className="next-pages">
        <ScreenTwo />
        <ScreenThree />
      </div>
    </div>
  );
}
