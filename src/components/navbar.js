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
      <div className="navBar">
        <Paper>
          <Tabs
            //value={value}
            onClick={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <div className="tabContainerBox">
              <div className="tabBox">
                <Link to="/">
                  <h1 className="TabLabel" label="Home">
                    Home
                  </h1>
                </Link>
              </div>

              <div className="tabBox">
                <Link to="/Table" state={"Table"}>
                  <h1 className="TabLabel" label="Data Set">
                    Data
                  </h1>
                </Link>
              </div>

              <div className="tabBox">
                <Link to="/Map" state={"Map"}>
                  <h1 className="TabLabel" label="Map">
                    Map
                  </h1>
                </Link>
              </div>
              <div className="tabBox">
                <Link to="/Media" state={"Media"}>
                  <h1 className="TabLabel" label="Media">
                    Media
                  </h1>
                </Link>
              </div>
              <div className="tabBox">
                <Link to="/Resources" state={"Resources"}>
                  <h1 className="TabLabel" label="Resources">
                    Resources
                  </h1>
                </Link>
              </div>
            </div>
          </Tabs>
        </Paper>
      </div>
    </div>
  );
}
