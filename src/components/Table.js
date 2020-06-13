import React, { useState, useEffect } from "react"
import axios from "axios"

export const Table = () => {
  const [records, setRecords] = useState([])

  useEffect(() => {
    axios
      // shooting incident data historic
      // .get("https://data.cityofnewyork.us/resource/833y-fsy8.json")
      // shooting incident data YTD
      // .get("https://data.cityofnewyork.us/resource/5ucz-vwe8.json")
      // Arrest data historic
      .get("https://data.cityofnewyork.us/resource/8h9b-rp9u.json")
      // Arrest data YTD
      // .get("https://data.cityofnewyork.us/resource/uip8-fykc.json")
      .then((res) => {
        // console.log(res.data)
        setRecords(res.data)
      })
      .catch((err) => {
        // console.log(err)
      })
  }, [])

  const renderTable = () => {
    console.log(records)
    return records.map((record, id) => {
      return (
        <tr key={id}>
          <td>{record.arrest_boro}</td>
          <td>{record.arrest_date}</td>
          <td>{record.arrest_precinct}</td>
          <td>{record.age_group}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h1>Shooting Incidents</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Boro</th>
            <th>Date</th>
            {/* <th>Age Group</th>
            <th>Race</th>
            <th>Gender</th> */}
            <th>Precinct</th>
            <th>Killing</th>
            <th>Victim Age Group</th>
            <th>Victim Race</th>
            <th>Victim Gender</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
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
  )
}
