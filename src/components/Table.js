import React, { useState, useEffect } from "react";
import axios from "axios";

export const Table = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
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

  const renderTable = () => {
    console.log(records);
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

  return (
    <div className="table-component">
      <h1 className="table-title">Shooting Incidents</h1>
      <div className="yellow-line"></div>
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
