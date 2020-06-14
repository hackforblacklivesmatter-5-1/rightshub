import React from "react"
const RightsCard = (props) => {
  return (
    <div className="card rights text-center">
      <div className="card-box text-dark">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text text-secondary">{props.desc}</p>
        <div>
          <a className="card-rights-link" href="#">
            Heres a link
          </a>
        </div>
      </div>
    </div>
  )
}
export default RightsCard
