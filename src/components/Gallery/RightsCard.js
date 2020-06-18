import React from "react";
const RightsCard = (props) => {
  return (
    <div className="card rights text-center">
      <div className="card-box text-dark">
        <h3 className="card-rights-title">{props.title}</h3>
        <p className="card-rights-text text-secondary">{props.desc}</p>
        <div>
          <a
            className="btn btn-outline-success"
            href={props.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};
export default RightsCard;
