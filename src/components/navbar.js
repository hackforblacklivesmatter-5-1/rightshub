import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Navbar.css";

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
            indicatorColor="inherit"
            textColor="inherit"
          >
            <div className="tabContainerBox">
              <div className="tabBox">
                <Link to="/">
                  <Tab className="TabLabel" label="Home" />
                </Link>
              </div>

              <div className="tabBox">
                <Link to="/Table" state={"Table"}>
                  <Tab className="TabLabel" label="John Lennon" />
                </Link>
              </div>

              <div className="tabBox">
                <Link to="/Map" state={"Map"}>
                  <Tab className="TabLabel" label="Map" />
                </Link>
              </div>
            </div>
          </Tabs>
        </Paper>
      </div>
    </div>
  );
}
