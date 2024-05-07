import React from 'react';
import './Proyect.css';

export const Proyect = () => {
  return (
    <div className='container'>
      <div className='project'>
        <h3 id='H'>Api imagenes</h3>
        <img src="GoDogGoApiImagenes.png" alt="Descripción del proyecto" />
        <p> Api para subir imagenes basada en una serie infantil.</p>
        <a href="https://github.com/Cookienator10/Api-Go-dog-Go-up-images">Ir al proyecto</a>
      </div>

      <div className='project'>
        <h3 id='H'>Simpsons-quote</h3>
        <img src="Simpsons.png" alt="Descripción del proyecto" />
        <p>Se realizo una pajina web con elementos sacado de una api </p>
        <a href="https://github.com/Cookienator10/simpsons-quote">Ir al proyecto</a>
      </div>

      <div className='project'>
        <h3 id='H'>sql Universidad</h3>
        <img src="SQLuniversidad.png" alt="Descripción del proyecto" />
        <p> Ejercicio hecho en lenguaje SQL </p>
        <a href="https://github.com/Cookienator10/Universidad">Ir al proyecto</a>
      </div>

      <div className='project'>
        <h3 id='H'>Ejercicos Enum Java</h3>
        <img src="ENUM.png" alt="Descripción del proyecto" />
        <p>Ejercicios resueltos usando Java</p>
        <a href="https://github.com/Cookienator10/Ejercicios_Enum-">Ir al proyecto</a>
      </div>
    </div>
  )
}

export default Proyect;
