import React from "react";
import { Table } from "./components/Table";
import GlobalFonts from "./fonts/fonts";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
