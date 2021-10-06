import logo from './logo.svg';
import './App.css';
import React from "react";
import Gatherings from "./Components/Gatherings";
import GatheringCreator from "./Components/GatheringCreator";
import Locations from "./Components/Locations";
import Participants from "./Components/Participants";
import Schema from "./Components/Schema";
import ObjectTypesInSchema from './Components/ObjectTypesInSchema'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/gatherings">Gatherings</Link>
            </li>
            <li>
              <Link to="/gatheringCreator">Create Creator</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/gatherings">
            <Gatherings />
          </Route>
          <Route path="/gatheringCreator">
            <GatheringCreator />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
        
    //       <div>
    //         All gatherings:
    //         <Gatherings></Gatherings>
    //       </div>

    //       <div>
    //         All Locations:
    //         <Locations></Locations>
    //       </div>

    //       <div>
    //         All participants:
    //         <Participants></Participants>
    //       </div>

    //       <div>
    //         Top Level Objects: 
    //         <ObjectTypesInSchema></ObjectTypesInSchema>
    //       </div>
    //    </header>
    // </div>
  );
}

export default App;
