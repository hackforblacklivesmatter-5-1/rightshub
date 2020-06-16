import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// following code via material-ui (besides small tweaks and customization)

export default function Navbar(props) {
  const handleChange = (event /*  newValue */) => {
    /* setValue(newValue),  */ console.log(event.target.innerText);
  };
  return (
    <div>
      <div className="navBar-comp">
        <div className="tabBox-main">
          <Link className="Logo" to="/">
            <h1 className="TabLogo" label="Logo">
              Rights-Hub
            </h1>
          </Link>
        </div>
        <div className="tabContainerBox">
          <div className="tabBox-nav">
            <div className="tabBox">
              <Link to="/Table" state={"Table"}>
                <h3 className="TabLabel" label="Data Set">
                  Data
                </h3>
              </Link>
            </div>

            <div className="tabBox">
              <Link to="/Markers" state={"Markers"}>
                <h3 className="TabLabel" label="Map">
                  Map
                </h3>
              </Link>
            </div>
            <div className="tabBox">
              <Link to="/Rights" state={"Rights"}>
                <h3 className="TabLabel" label="Rights">
                  Rights
                </h3>
              </Link>
            </div>
            <div className="tabBox">
              <Link to="/Resources" state={"Resources"}>
                <h3 className="TabLabel" label="Resources">
                  Resources
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
