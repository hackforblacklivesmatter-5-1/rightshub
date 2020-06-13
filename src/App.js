import React from "react";
<<<<<<< HEAD
import { Table } from "./components/Table";
import GlobalFonts from "./fonts/fonts";
import { Route } from "react-router-dom";
import "./index.css";
import Markers from "./components/Markers";
import data from "./data/data.json";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Media } from "./components/Media";
import { Resources } from "./components/Resources";
=======
import logo from "./logoblm.png";
import "./App.css";
>>>>>>> 53b783a4f5b5255ea0af7b5ff80527ecabd90e5c

function App() {
  console.log(data[0]["Street Address of Incident"]);
  return (
    <div className="App">
<<<<<<< HEAD
      <GlobalFonts />
      <Navbar></Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/Table" exact component={Table} />
      <Route path="/Markers" exact component={Markers} />
      <Route path="/Media" exact component={Media} />
      <Route path="/Resources" exact component={Resources} />
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to begin!
        </p>
      </header>
>>>>>>> 53b783a4f5b5255ea0af7b5ff80527ecabd90e5c
    </div>
  );
}

export default App;
