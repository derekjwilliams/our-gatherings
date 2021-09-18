import logo from './logo.svg';
import './App.css';
import React from "react";
import Gatherings from "./Components/Gatherings";
import Locations from "./Components/Locations";
import Participants from "./Components/Participants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
            All gatherings:
            <Gatherings></Gatherings>
          </div>

          <div>
            All locations:
            <Locations></Locations>
          </div>

          <div>
            All participants:
            <Participants></Participants>
          </div>
       </header>
    </div>
  );
}

export default App;
