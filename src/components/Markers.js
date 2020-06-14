import React from 'react';
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import police from '../data/data-ny.json';

const Markers = () => {
  return (
    <Map center={[40.7128, -74.0060]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {police.map(policeVictims => (
        <Marker
          key={policeVictims["WaPo ID (If included in WaPo database)"]}
          position={[policeVictims['Latitude'], policeVictims['Longitude']]}
        >
          <Popup><b>{policeVictims["Victim's name"]}</b><br />
            {policeVictims["Victim's age"]}, {policeVictims["Victim's race"]}
            <br />
            <br />
            {policeVictims["A brief description of the circumstances surrounding the death"]}
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}

export default Markers;