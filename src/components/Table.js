import React, { useState } from "react";
import data from "../data/data-ny.json";

export const Table = () => {
  const [race, setRace] = useState(false);
  const [date, setDate] = useState(false);
  const [age, setAge] = useState(false);
  const [gun, setGun] = useState(false);

  // Handling functions

  const handleRowClick = (e) => {
    window.open(
      e.currentTarget.dataset.href,
      "_blank" // <- This is what makes it open in a new window.
    );
    console.log(
      "You clicked a row!",
      "e.target.dataset.href: ",
      e.currentTarget.dataset.href
    );
  };

  // Render data

  const renderData = () => {
    return data.map((record, id) => {
      return (
        <tr
          className="table-row"
          style={{
            cursor: `pointer`,
          }}
          onClick={(e) => handleRowClick(e)}
          key={id}
          data-href={
            record["Link to news article or photo of official document"]
          }
        >
          <td>{record["Victim's race"]}</td>
          <td>{record["Victim's name"]}</td>
          <td>{record["Cause of death"]}</td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          {/* <td>{record["Alleged Threat Level (Source: WaPo):"]}</td> */}
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      );
    });
  };

  //Pagination
  const paginate = (currentPage) => {
    console.log("Im paginating");
    const page = currentPage;
    countPages();
    turnPageTo(page);
  };

  const turnPageTo = (n) => {
    const startIndex = n * 20;
    const currentData = data.slice(startIndex, startIndex + 20);
    console.log(currentData);
  };

  const countPages = () => {
    console.log("counting!");
    const pages = Math.ceil(data.length / 20);
  };

  const renderPages = () => {};

  // Filter and Sort functionalitys
  const filterByRace = () => {
    const blackVictims = data.filter(
      (victim) => victim["Victim's race"] === "Black"
    );
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
      );
    });
  };

  const sortByDate = () => {
    let sorted = data.sort((a, b) =>
      new Date(a["Date of Incident (month/day/year)"]) >
      new Date(b["Date of Incident (month/day/year)"])
        ? 1
        : -1
    );

    console.log(sorted);

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
      );
    });
  };

  const sortByAge = () => {
    let sorted = data.sort((a, b) =>
      parseInt(a["Victim's age"]) > parseInt(b["Victim's age"]) ? 1 : -1
    );
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
      );
    });
  };

  const sortByGun = () => {
    let sorted = data.sort((a, b) =>
      a["Cause of death"] > b["Cause of death"] ? 1 : -1
    );

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
      );
    });
  };

  const toggleRace = () => {
    setRace(!race);
  };

  const toggleDate = () => {
    setDate(!date);
  };

  const toggleAge = () => {
    setAge(!age);
  };

  const toggleGun = () => {
    setGun(!gun);
  };

  return (
    <div className="table-component">
      <h1 className="table-title">Killings by Police</h1>
      <div className="yellow-line"></div>{" "}
      <h6 className="table-subheader">
        Below are the statistics of killings by police in New York from
        2013-2019.
      </h6>
      <div className="table-buttons">
        <button className="black-lives-button" onClick={() => toggleRace()}>
          Show Black Lives
        </button>

        {/* <button onClick={() => toggleGun()}>Sorted Gun</button> */}
      </div>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr className="table-headers">
              <th>Victim's Race</th>
              <th>Victim's Name</th>
              <th>Description</th>
              <th>
                Victim's age{" "}
                <div className="arrow-container" onClick={() => toggleAge()}>
                  <i className="arrow-down"></i>
                </div>
              </th>
              <th>
                Date of Incident
                <div className="arrow-container" onClick={() => toggleDate()}>
                  <i className="arrow-down"></i>
                </div>
              </th>
              <th>Fleeing</th>
              <th>Alleged Weapon</th>
              {/* <th>Alleged Threat Level</th> */}
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
        {paginate(0)}
      </div>{" "}
      <a href="https://github.com/hackforblacklivesmatter-5-1/rightshub/blob/master/src/data/NY2013to2019.xlsx?raw=true">
        <button className="download-button">Download Dataset</button>
      </a>
    </div>
  );
};
