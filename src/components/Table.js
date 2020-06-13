import React from "react"
import data from "../data/data.json"

export const Table = () => {
  console.log(data)

  return (
    <div className="table-component">
      <h1 className="table-title">Shooting Incidents</h1>
      <div className="yellow-line"></div>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr>
              <th>Race</th>
            </tr>
          </thead>
          <tbody>
            {/* {renderData()} */}
            {/* {sortByRace()} */}
            {/* {sortByName()} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
