import React from 'react';
import './References.css'; // Importa tu archivo CSS para los estilos

export const References = () => {
  return (
    <div className="references-container">
      <div className="reference">
        <p>Nombre: </p>
        <p>Cargo: </p>
        <p>Teléfono:</p>
        <p>Correo Electrónico: </p>
      </div>
      <div className="reference">
        <p>Nombre: </p>
        <p>Cargo: </p>
        <p>Teléfono: </p>
        <p>Correo Electrónico: </p>
      </div>
      <div className="reference">
        <p>Nombre: </p>
        <p>Cargo:</p>
        <p>Teléfono: </p>
        <p>Correo Electrónico:</p>
      </div>
      {/* Agrega más referencias aquí si es necesario */}
    </div>
  );
};

export default References;
