import React, { useState, useEffect } from "react"
import data from "../data/data-ny.json"

  

export const Table = () => {

    //Hooks
    let [page, setPage] = useState(1);


    //Pagination
    
    const turnPageTo = (n) => {
      const startIndex = (n - 1) * 20;
      const currentData = data.slice(startIndex, (startIndex + 20));
      return currentData
      
    };

    const handleTurnPage = (e) => {
      e.preventDefault();
      console.log('handlepage executed, current page: ', page)
      setPage(e.target.innerText)
      
    };

    const currentPage = (pageNumber=1) => {
      return pageNumber
    };
  
    const countPages = () => {
      console.log('counting!')
      const pages = Math.ceil(data.length / 20);
      return pages
    };
  
  

    

  // Handling functions
  const handleRowClick = (e) => {
    window.open(
      e.currentTarget.dataset.href,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  const handlePageClick = (e) => {
    e.preventDefault();
    if(e.target.className === 'pagination-prev') {
      if(page > 0) {
        setPage(--page)
      }
    } else if(e.target.className === 'pagination-next') {
        if(page < countPages()) {
          setPage(++page)
      }
    } else {
      handleTurnPage(e);

    }
  };

  // Render data
  const renderData = (pageData) => {
    return pageData.map((record, id) => {
      return (
        
          <tr className="table-row" style={{
                cursor: `pointer`,
              }} 
              onClick={(e) => handleRowClick(e)} key={id} data-href={record["Link to news article or photo of official document"]}>
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
        
      )
    })
  }





  // Filter and Sort functionality
  const filterByRace = () => {
    const blackVictims = data.filter(
      (victim) => victim["Victim's race"] === "Black"
    )
    console.log("blackVictims: ", blackVictims)
  }

  const sortByDate = () => {
    let sorted = data.sort((a, b) =>
      new Date(a["Date of Incident (month/day/year)"]) <
      new Date(b["Date of Incident (month/day/year)"])
        ? 1
        : -1
    )
    console.log(sorted)
  }

  const sortByAge = () => {
    let sorted = data.sort((a, b) =>
      parseInt(a["Victim's age"]) < parseInt(b["Victim's age"]) ? 1 : -1
    )
    console.log(sorted)
    return sorted
  }

  const sortByGun = () => {
    let sorted = data.sort((a, b) =>
      a["Cause of death"] > b["Cause of death"] ? 1 : -1
    )
    console.log(sorted)
  }

  return (
    <div className="table-component">
      <h1 className="table-title">Killings by Police</h1>
      <div className="yellow-line"></div>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <button onClick={() => filterByRace()}>Black Victims</button>
            <button onClick={() => sortByDate()}>Sorted Race</button>
            <button onClick={() => sortByAge()}>Sorted Age</button>
            <button onClick={() => sortByGun()}>Sorted Gun</button>
            <tr>
              <th>Victim's Race</th>
              <th>Victim's Name</th>
              <th>Cause of Death</th>
              <th>Victim's age</th>
              <th>Date of Incident (month/day/year)</th>
              <th>Fleeing</th>
              <th>Alleged Weapon</th>
              {/* <th>Alleged Threat Level</th> */}
              <th>Body Camera</th>
            </tr>
          </thead>
          <tbody>
            {renderData(turnPageTo(page))}
            {/* {sortByRace()} */}
            {/* {sortByName()} */}
          </tbody>
        </table>
      </div>
      {/* Need to dynamically map anchor tags */}
      <div onClick={(e) => handlePageClick(e)} class="pagination">
            <a className="pagination-prev" href="#">&laquo;</a>
            <a className="pagination-page active" href="#">1</a>
            <a className="pagination-page" href="#">2</a>
            <a className="pagination-page" href="#">3</a>
            <a className="pagination-page" href="#">4</a>
            <a className="pagination-page" href="#">5</a>
            <a className="pagination-page" href="#">6</a>
            <a className="pagination-next" href="#">&raquo;</a>
      </div>
    </div>
  )
}

// .map((record, id) => {
//   return (
//     // <tr key={id}>
//     //   <td>{record["Date of Incident (month/day/year)"]}</td>
//     // </tr>
//   )
// })

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
