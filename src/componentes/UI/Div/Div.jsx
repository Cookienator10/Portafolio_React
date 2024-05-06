import React from 'react';
import './Div.css';

const Div = ({ title, imgSrc = 's.png', imgAlt = 'Default Image' }) => {
  const imagePath = `/${imgSrc}`;

  return (
    <div className="header-container">
      <img src={imagePath} alt={imgAlt} className='e' />
      <h2>{title}</h2>
      <hr className="line" />
    </div>
  );
};

export { Div };
