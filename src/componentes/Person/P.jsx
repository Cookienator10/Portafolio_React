
import React from 'react';
import './P.css'; 

export const P = () => {
  return (
    <>
      <div className="P-container" id="main-container">
      <img src="yo.jpg" id='Photo' />
        <h1 id='T'>Santiago Rojas Rodríguez</h1>
      </div>

      <div id='W'>
        <p>Perfil</p>
        <p>Proyectos</p>
        <p>Referencias</p>
        <p>Experiencia</p>
        <img src="logo1.png" id='Logo' />
      </div>
    </>
  );
};

export default P;
