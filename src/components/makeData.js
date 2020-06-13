// import React, { useState, useEffect } from "react"
// import axios from "axios"

import React, { useState, useEffect } from "react"

export const makeData = () => {
  return <div></div>
}

useEffect(() => {
  axios
    .get("https://data.cityofnewyork.us/resource/5ucz-vwe8.json")
    .then((res) => {
      console.log(res.data)
      setRecords(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])
