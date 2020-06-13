import React from "react";
import { Table } from "./components/Table";
import GlobalFonts from "./fonts/fonts";
import { Route } from "react-router-dom";
import "./index.css";
import Markers from "./components/Markers";
import data from "./data/data.json";
import { Home } from "./components/Home";

function App() {
  console.log(data[0]["Street Address of Incident"]);
  return (
    <div className="App">
      <GlobalFonts />
      <Route path="/" exact component={Home} />
      <Route path="/Table" exact component={Table} />
      <Route path="/Markers" exact component={Markers} />
    </div>
  );
}

export default App;
