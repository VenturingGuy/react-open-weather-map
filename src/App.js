import React from 'react';
import './App.css';
import Logo from './Components/Logo/Logo';
import Mood from './Components/Mood/Mood';
import Forecast from "./Components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo />
       <h1>React Weather App</h1>
     </header>
      <main>
        <Forecast />
        <Mood />
      </main>
      <footer>
        Page created by Luis Ventura  
      </footer>
    </div>
  );
}

export default App;
