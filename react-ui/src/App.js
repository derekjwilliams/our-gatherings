import logo from './logo.svg';
import './App.css';
import React from "react";
import Gatherings from "./Components/Gatherings";
import Locations from "./Components/Locations";
import Participants from "./Components/Participants";
import Schema from "./Components/Schema";

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
            All Locations:
            <Locations></Locations>
          </div>

          <div>
            All participants:
            <Participants></Participants>
          </div>

          <div>
            Schema: 
            <Schema></Schema>
          </div>
       </header>
    </div>
  );
}

export default App;
