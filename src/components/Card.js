import React from 'react';
import aclu from '../assets/aclu-logo.jpeg';

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={aclu} alt="ACLU" />
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title">ACLU</h4>
        <p className="card-text text-secondary">
          Being stopped by police is a stressful experience that can go bad quickly. Here we describe what the law requires and also offer strategies for handling police encounters. We want to be clear: The burden of de-escalation does not fall on private citizens — it falls on police officers. However, you cannot assume officers will behave in a way that protects your safety or that they will respect your rights even after you assert them.
        </p>
      </div>
    </div>
  );
};

export default Card;
