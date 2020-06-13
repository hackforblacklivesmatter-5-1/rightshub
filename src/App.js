import React from "react";
import { Table } from "./components/Table";
import GlobalFonts from "./fonts/fonts";
import { Route } from "react-router-dom";
import "./index.css";
import Markers from "./components/Markers";
import data from "./data/data.json";
import { Home } from "./components/Home";
import Navbar from "./components/navbar";
import { Media } from "./components/Media";
import { Resources } from "./components/Resources";
import "./App.css";

function App() {
  console.log(data[0]["Street Address of Incident"]);
  return (
    <div className="App">
      <GlobalFonts />
      <Navbar></Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/Table" exact component={Table} />
      <Route path="/Markers" exact component={Markers} />
      <Route path="/Media" exact component={Media} />
      <Route path="/Resources" exact component={Resources} />
    </div>
  );
}

export default App;
