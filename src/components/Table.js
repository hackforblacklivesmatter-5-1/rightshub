import React, { useState } from "react";
import data from "../data/data-ny.json";

export const Table = () => {
  const [race, setRace] = useState(false);
  const [sort, setSort] = useState('')

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
          <td className="Fleeing">{record["Fleeing (Source: WaPo)"]}</td>
          <td className="Weapon">{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td className="Camera">{record["Body Camera (Source: WaPo)"]}</td>
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
          
        >
          <td>{record["Victim's race"]}</td>
          <td onMouseEnter={() => showDescription(record)}>
            {record["Victim's name"]}
          </td>
          <td>{record["Victim's age"]}</td>
          <td>{record["Date of Incident (month/day/year)"]}</td>
          <td className="Fleeing">{record["Fleeing (Source: WaPo)"]}</td>
          <td className="Weapon">{record["Alleged Weapon (Source: WaPo)"]}</td>
          <td className="Camera">{record["Body Camera (Source: WaPo)"]}</td>
        </tr>
      );
    });
  };

  //Filter black lives lost
  const filterLives = () => {
    return data.filter((victim) => victim["Victim's race"] === "Black").length;
  }

  //Sort data alphabetically by race
  const sortByRace = () => { 
    const sortedArray = data.sort((a, b) => {
      if(a["Victim's race"] > b["Victim's race"]) {
        return 1
      } else {
        return -1
      }
    })
     setSort('race')
     console.log('data sorted by victim race: ', sortedArray)
   }

   //Sort data alphabetically by victim's name
   const sortByAge = () => { 
    const sortedArray = data.sort((a, b) => {
      if(a["Victim's age"] > b["Victim's age"]) {
        return 1
      } else {
        return -1
      }
     })
     setSort('age')
    console.log('data sorted by victim age: ', sortedArray)
   }

   const sortByName = () => {
     
     const sortedArray = data.sort((a,b) => {
       const lastNameA = a["Victim's name"].split(' ').slice(-1).join(' ');
       const lastNameB = b["Victim's name"].split(' ').slice(-1).join(' ');
       if(lastNameA > lastNameB) {
         return 1
       } else {
         return -1
       }
     })
     setSort('name')
     console.log('data sorted by victim name: ', sortedArray)
   }



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
    let blacklivesbutton = document.getElementsByClassName(
      "black-lives-button"
    )[0];
    let livesbutton = document.getElementsByClassName("lives-button")[0];
    if (blacklivesbutton.style.display !== "none") {
      blacklivesbutton.style.display = "none";
      livesbutton.style.display = "inline-block";
    } else {
      blacklivesbutton.style.display = "inline-block";
      livesbutton.style.display = "none";
    }
    setRace(!race);
  };  
  return (
    <div className="table-component">
      {" "}
      <div className="component-header-container">
        <h1 className="table-title">Killings by Police</h1>
        <div className="red-line-table"></div>
      </div>
      <h6 className="table-subheader">
        Below are the statistics of killings by police in New York from
        2013-2019.
      </h6>
      <div className="table-liveslost">
        {" "}
        {race
          ? `Number of Black Lives Lost: ${filterLives()}`
          : `Total Number of Lives Lost: ${data.length}`}
      </div>
      <div className="table-buttons">
        <button className="black-lives-button" onClick={() => toggleRace()}>
          Black Lives Lost
        </button>
        <button className="lives-button" onClick={() => toggleRace()}>
          Total Lives Lost
        </button>
        <a href="https://github.com/hackforblacklivesmatter-5-1/rightshub/blob/master/src/data/NY2013to2019.xlsx?raw=true">
          <button className="download-button">Download Dataset</button>
        </a>
      </div>{" "}
      <h4 className="data-tip">
        Click on person's name for related news article
      </h4>
      <div className="table-container">
        <table style={{ cursor: `pointer`,}} className="table-content">
          <thead>
            <tr className="table-headers">
              <th onClick={() => sortByRace()}>Victim's Race</th>
              <th onClick={() => sortByName()}>Victim's Name</th>
              <th onClick={() => sortByAge()}>Victim's age </th>
              <th>Date of Incident</th>
              <th className="Fleeing">Fleeing</th>
              <th className="Weapon">Alleged Weapon</th>
              <th className="Camera">Body Camera</th>
            </tr>
          </thead>
          <tbody>{race ? filterByRace() : renderData()}</tbody>
        </table>
      </div>
    </div>
  );
};


//This is Will's table branch post Hackathon