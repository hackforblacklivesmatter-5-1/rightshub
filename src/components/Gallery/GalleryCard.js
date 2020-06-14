import React from 'react';
import './card-style.css'


const GalleryCard = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="ACLU" className="card-img-top" />
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title">ACLU</h4>
        <p className="card-text text-secondary">
          Being stopped by police is a stressful experience that can go bad quickly. Here we describe what the law requires and also offer strategies for handling police encounters. We want to be clear: The burden of de-escalation does not fall on private citizens — it falls on police officers. However, you cannot assume officers will behave in a way that protects your safety or that they will respect your rights even after you assert them.
        </p>
        <a href="https://www.aclu.org/know-your-rights/stopped-by-police/" className="btn btn-outline-success">Learn More</a>
      </div>
    </div>
  );
};

export default GalleryCard;
