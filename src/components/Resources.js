import React from "react";
import Gallery from "./Gallery/Gallery";

export const Resources = () => {
  return (
    <div className="Resources">
      {" "}
      <div className="component-header-container">
        <h1 className="resources-title">Community Resources</h1>
        <h1 className="resources-newtitle">Resources</h1>

        <div className="red-line-resources"></div>
      </div>
      <h5 className="resources-subheader">
        Below are organizations that aim to support and educate Black Lives.
      </h5>
      <Gallery />
    </div>
  );
};
