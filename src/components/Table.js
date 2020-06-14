import React, { useState } from "react"
import data from "../data/data-ny.json"

export const Table = () => {
  const [race, setRace] = useState(false)
  const [date, setDate] = useState(false)
  const [age, setAge] = useState(false)
  const [gun, setGun] = useState(false)

  const renderData = () => {
    return data.map((record, id) => {
      return (
        <tr key={id}>
          <td>{record["Victim's race"]}</td>
          <td>{record["Victim's name"]}</td>
          <td>
            {
              record[
                "A brief description of the circumstances surrounding the death"
              ]
            }
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td>{record["Alleged Threat Level (Source: WaPo):"]}</td>
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      )
    })
  }

  const filterByRace = () => {
    const blackVictims = data.filter(
      (victim) => victim["Victim's race"] === "Black"
    )
    return blackVictims.map((record, id) => {
      return (
        <tr key={id}>
          <td>{record["Victim's race"]}</td>
          <td>{record["Victim's name"]}</td>
          <td>
            {
              record[
                "A brief description of the circumstances surrounding the death"
              ]
            }
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td>{record["Alleged Threat Level (Source: WaPo):"]}</td>
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      )
    })
  }

  const sortByDate = () => {
    let sorted = data.sort((a, b) =>
      new Date(a["Date of Incident (month/day/year)"]) >
      new Date(b["Date of Incident (month/day/year)"])
        ? 1
        : -1
    )
    return sorted.map((record, id) => {
      return (
        <tr key={id}>
          <td>{record["Victim's race"]}</td>
          <td>{record["Victim's name"]}</td>
          <td>
            {
              record[
                "A brief description of the circumstances surrounding the death"
              ]
            }
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td>{record["Alleged Threat Level (Source: WaPo):"]}</td>
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      )
    })
  }

  const sortByAge = () => {
    let sorted = data.sort((a, b) =>
      parseInt(a["Victim's age"]) > parseInt(b["Victim's age"]) ? 1 : -1
    )
    return sorted.map((record, id) => {
      return (
        <tr key={id}>
          <td>{record["Victim's race"]}</td>
          <td>{record["Victim's name"]}</td>
          <td>
            {
              record[
                "A brief description of the circumstances surrounding the death"
              ]
            }
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td>{record["Alleged Threat Level (Source: WaPo):"]}</td>
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      )
    })
  }

  const sortByGun = () => {
    let sorted = data.sort((a, b) =>
      a["Cause of death"] > b["Cause of death"] ? 1 : -1
    )
    return sorted.map((record, id) => {
      return (
        <tr key={id}>
          <td>{record["Victim's race"]}</td>
          <td>{record["Victim's name"]}</td>
          <td>
            {
              record[
                "A brief description of the circumstances surrounding the death"
              ]
            }
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td>{record["Alleged Threat Level (Source: WaPo):"]}</td>
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      )
    })
  }

  const toggleRace = () => {
    setRace(!race)
  }

  const toggleDate = () => {
    setDate(!date)
  }

  const toggleAge = () => {
    setAge(!age)
  }

  const toggleGun = () => {
    setGun(!gun)
  }

  return (
    <div className="table-component">
      <h1 className="table-title">Killings by Police</h1>
      <div className="yellow-line"></div>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <button onClick={() => toggleRace()}>Black Lives</button>
            <button onClick={() => toggleDate()}>Sorted Date</button>
            <button onClick={() => toggleAge()}>Sorted Age</button>
            {/* <button onClick={() => toggleGun()}>Sorted Gun</button> */}
            <tr>
              <th>Victim's Race</th>
              <th>Victim's Name</th>
              <th>Description</th>
              <th>Victim's age</th>
              <th>Date of Incident (month/day/year)</th>
              <th>Fleeing</th>
              <th>Alleged Weapon</th>
              <th>Alleged Threat Level</th>
              <th>Body Camera</th>
            </tr>
          </thead>
          <tbody>
            {race ? filterByRace() : renderData()}
            {date ? sortByDate() : renderData()}
            {age ? sortByAge() : renderData()}
            {gun ? sortByGun() : renderData()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Filter victims by being from New York City - can be anywhere
// const filterNewYork = () => {
//   const newYorkVictims = data.filter(victim => victim.City === 'New York')
//   console.log('New York victims: ', newYorkVictims)
//   return newYorkVictims
// };

// const filterByGunshot = () => {
//   const gunshotVictims = data.filter(victim => victim["Cause of death"] === "Gunshot")
//   console.log('gunshotVictims: ', gunshotVictims)
//   // data.forEach(victim => console.log(victim["Cause of death"]))
// };

// const filterByNoCriminalCharges = () => {
//   const noCriminalCharges = data.filter(victim => victim["Criminal Charges?"] === "No known charges")
//   console.log('noCriminalCharges: ', noCriminalCharges)
// };

// const filterByAllegedWeapons = () => {
//   const allegedWeapons = data.map(victim => victim["Alleged Weapon (Source: WaPo)"])
//   console.log('allegedWeapons: ', allegedWeapons);
// };
