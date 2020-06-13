import React from "react"
import data from "../data/data.json"

export const Table = () => {
  console.log(data)

  return (
    <div>
      <h1>Killed by Police</h1>
      <table className="table">
        <thead></thead>
      </table>
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
