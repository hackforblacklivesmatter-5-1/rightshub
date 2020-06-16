import React, { useState } from "react";
import data from "../data/data-ny.json";

export const Table = () => {
  const [race, setRace] = useState(false);

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

  const showDescription = (record) => {
    console.log(
      record["A brief description of the circumstances surrounding the death"]
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
          <td onMouseEnter={() => showDescription(record)}>
            {record["Victim's name"]}
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      );
    });
  };

  // Filter and Sort functions
  const filterByRace = () => {
    const blackVictims = data.filter(
      (victim) => victim["Victim's race"] === "Black"
    );
    return blackVictims.map((record, id) => {
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
          r
        >
          <td>{record["Victim's race"]}</td>
          <td onMouseEnter={() => showDescription(record)}>
            {record["Victim's name"]}
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td>{record["Fleeing (Source: WaPo)"]}</td>
          <td>{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td>{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      );
    });
  };

  const filterLives = () => {
    return data.filter((victim) => victim["Victim's race"] === "Black").length;
  };

  //Pagination
  // const paginate = (currentPage) => {
  //   // console.log("Im paginating")
  //   const page = currentPage
  //   countPages()
  //   turnPageTo(page)
  // }

  // const turnPageTo = (n) => {
  //   const startIndex = n * 20;
  //   const currentData = data.slice(startIndex, startIndex + 20);
  //   // console.log(currentData)
  // };

  // const countPages = () => {
  //   // console.log("counting!")
  //   const pages = Math.ceil(data.length / 20);
  // };

  // toggle state
  const toggleRace = () => {
    setRace(!race);
  };

  return (
    <div className="table-component">
      <h1 className="table-title">Killings by Police</h1>
      <div className="red-line-table"></div>
      <h6 className="table-subheader">
        Below are the statistics of killings by police in New York from
        2013-2019.
      </h6>
      <div className="table-liveslost">
        {" "}
        {race
          ? `Number of Black Lives Lost: ${filterLives()}`
          : `Number of Lives Lost: ${data.length}`}
      </div>
      <div className="table-buttons">
        <button className="black-lives-button" onClick={() => toggleRace()}>
          Show Black Lives
        </button>
        <a href="https://github.com/hackforblacklivesmatter-5-1/rightshub/blob/master/src/data/NY2013to2019.xlsx?raw=true">
          <button className="download-button">Download Dataset</button>
        </a>
      </div>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr className="table-headers">
              <th>Victim's Race</th>
              <th>Victim's Name</th>
              <th>Victim's age </th>
              <th>Date of Incident</th>
              <th>Fleeing</th>
              <th>Alleged Weapon</th>
              <th>Body Camera</th>
            </tr>
          </thead>
          <tbody>{race ? filterByRace() : renderData()}</tbody>
        </table>
      </div>
    </div>
  );
};
