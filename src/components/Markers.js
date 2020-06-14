import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import police from "../data/data-ny.json";

const Markers = () => {
  return (
    <div className="Markers-component">
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
            </Popup>
          </Marker>
        ))}
      </Map>
      <h4 className="Marker-tip">Click on GPS pins for information</h4>
    </div>
  );
};

export default Markers;
