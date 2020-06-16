import React from "react";

const GalleryCard = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="ACLU" className="card-img-top" />
      </div>

      <div className="card-box text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.desc}</p>
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-success"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default GalleryCard;
