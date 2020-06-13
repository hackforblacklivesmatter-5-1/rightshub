import React, { useState, useEffect } from "react";
import axios from "axios";

//JSON Data
import data from "../data/data.json"

export const Table = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {

    // filterNewYork();
    // filterByGunshot();
    // filterByNoCriminalCharges();

    filterByRace();
    
    // filterByAllegedWeapons();

    axios
      // shooting incident data historic
      // .get("https://data.cityofnewyork.us/resource/833y-fsy8.json")
      // shooting incident data YTD
      // .get("https://data.cityofnewyork.us/resource/5ucz-vwe8.json")
      // Arrest data historic
      // .get("https://data.cityofnewyork.us/resource/8h9b-rp9u.json")
      // Arrest data YTD
      .get("https://data.cityofnewyork.us/resource/uip8-fykc.json")
      .then((res) => {
        // console.log(res.data)
        setRecords(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  // Filter victims by being from New York City - can be anywhere
  const filterNewYork = () => {
    const newYorkVictims = data.filter(victim => victim.City === 'New York')
    console.log('New York victims: ', newYorkVictims)
    return newYorkVictims

  };

  const filterByGunshot = () => {
    const gunshotVictims = data.filter(victim => victim["Cause of death"] === "Gunshot")
    console.log('gunshotVictims: ', gunshotVictims)
    // data.forEach(victim => console.log(victim["Cause of death"]))
  };

  const filterByNoCriminalCharges = () => {
    const noCriminalCharges = data.filter(victim => victim["Criminal Charges?"] === "No known charges")
    console.log('noCriminalCharges: ', noCriminalCharges)
  };

  const filterByAllegedWeapons = () => {
    const allegedWeapons = data.map(victim => victim["Alleged Weapon (Source: WaPo)"])
    console.log('allegedWeapons: ', allegedWeapons);
  };

  const filterByRace = () => {
    const blackVictims = data.filter(victim => victim["Victim's race"])
    console.log('blackVictims: ', blackVictims)
  };

  



  



  const renderTable = () => {
    return records.map((record, id) => {
      return (
        <tr key={id}>
          <td>{record.boro}</td>
          <td>{record.occur_date}</td>
          <td>{record.perp_age_group}</td>
          <td>{record.perp_race}</td>
          <td>{record.perp_sex}</td>
          <td>{record.precinct}</td>
          <td>{record.statistical_murder_flag}</td>
          <td>{record.vic_age_group}</td>
          <td>{record.vic_race}</td>
          <td>{record.vic_sex}</td>
        </tr>
      );
    });
  };
  console.log('data: ', data);
  return (
    <div>
      <h1>Shooting Incidents</h1>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr>
              <th>Borough</th>
              <th>Date</th>
              <th>Age Group</th>
              <th>Race</th>
              <th>Gender</th>
              <th>Precinct</th>
              <th>Killing</th>
              <th>Victim Age Group</th>
              <th>Victim Race</th>
              <th>Victim Gender</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </div>
  );
};
