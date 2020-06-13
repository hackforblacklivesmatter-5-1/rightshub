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
      {police.map(popo => (
        <Marker
          key={popo["WaPo ID (If included in WaPo database)"]}
          position={[popo['Latitude'], popo['Longitude']]}
        >
          <Popup><b>{popo["Victim's name"]}</b><br />
            {popo["Victim's age"]}, {popo["Victim's race"]}
            <br />
            <br />
            {popo["A brief description of the circumstances surrounding the death"]}
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}

export default Markers;