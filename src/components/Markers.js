import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import police from "../data/data-ny.json";

const Markers = () => {
  return (
    <div className="Markers-component">
      <h1 className="markers-title">Incident Map</h1>
      <div className="red-line-markers"></div>
      <h6 className="markers-subheader">
        Below are the reported killings by police in New York from 2013-2019
        mapped out.
        <div className="table-buttons">
          <a href="https://github.com/hackforblacklivesmatter-5-1/rightshub/blob/master/src/data/NY2013to2019.xlsx?raw=true">
            <button className="download-button2">Download Dataset</button>
          </a>
        </div>{" "}
      </h6>

      <h4 className="Marker-tip">Click on GPS pins for information</h4>
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
              <a
                href={
                  policeVictims[
                    "Link to news article or photo of official document"
                  ]
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Full Story
              </a>
            </Popup>
          </Marker>
        ))}
      </Map>
      <h5 className="Marker-tip2">
        Data sourced via{" "}
        <a
          className="marker-link"
          href="https://www.mappingpoliceviolence.org/"
        >
          Mapping Police Violence
        </a>
      </h5>
    </div>
  );
};

export default Markers;
