import React from "react";
import { Table } from "./components/Table";
import GlobalFonts from "./fonts/fonts";
import { Route } from "react-router-dom";
import "./index.css";
import Markers from "./components/Markers";
import data from "./data/data.json";
import { Home } from "./components/Home";
import Navbar from "./components/navbar";
import { Rights } from "./components/Rights";
import { Resources } from "./components/Resources";

function App() {
  // console.log(data[0]["Street Address of Incident"]);
  return (
    <div className="App">
      <GlobalFonts />
      <Navbar></Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/Table" exact component={Table} />
      <Route path="/Markers" exact component={Markers} />
      <Route path="/Rights" exact component={Rights} />
      <Route path="/Resources" exact component={Resources} />
    </div>
  );
}

export default App;
