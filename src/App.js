import './App.css';
import LandingPage from './components/LandingPage';
import ScreenTwo from './components/ScreenTwo';
import NavHearts from './components/NavHearts';

export default function App() {
  return (
    <div className="App">
      <NavHearts/>
      <LandingPage />
      <ScreenTwo />
    </div>
  );
}
