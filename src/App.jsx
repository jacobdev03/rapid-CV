import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="infoContainer">
        <General />
        <Education />
        <Experience />
      </div>

      <div className="cv-placeholder"></div>
    </div>
  );
}

export default App;
