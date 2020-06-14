import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import police from "../data/data-ny.json";

const Markers = () => {
  return (
    <div className="Markers-component">
      <h1 className="markers-title"> </h1>
      {/* <div className="black-line"></div>{" "} */}
      <h6 className="markers-subheader">
        Below are the reported killings by police in New York from 2013-2019
        mapped out.
      </h6>
      <div className="markers-buttons"></div>
      <Map center={[40.7128, -74.006]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {police.map((policeVictims) => (
          <Marker
            key={policeVictims["WaPo ID (If included in WaPo database)"]}
            position={[policeVictims["Latitude"], policeVictims["Longitude"]]}
          >
            <Popup>
              <b>{policeVictims["Victim's name"]}</b>
              <br />
              {policeVictims["Victim's age"]}, {policeVictims["Victim's race"]}
              <br />
              <br />
              {
                policeVictims[
                "A brief description of the circumstances surrounding the death"
                ]
              }
              <br />
              <br />
              <a href={policeVictims["Link to news article or photo of official document"]}>Read the Full Story</a>
            </Popup>
          </Marker>
        ))}
      </Map>
      <h4 className="Marker-tip">Click on GPS pins for information</h4>
      <a href="https://github.com/hackforblacklivesmatter-5-1/rightshub/blob/master/src/data/NY2013to2019.xlsx?raw=true">
        <button className="download-button">Download Dataset</button>
      </a>
    </div>
  );
};

export default Markers;
