import React from 'react';
import './Main.css';
import { Div } from '../../UI/Div/Div'; 
import Proyect from '../../UI/Proyect/Proyect';
import References from '../../UI/References/References';

export const Main = () => {
  return (
    <main className='main-page'>
      <Div title="Perfil" imgSrc="s.png" imgAlt="Inicio" />

      <div>
        <p className='d'>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
        <p className='d'>debitis illum possimus error non temporibus...</p>
        <p className='d'>enim eaque ad molestias, blanditiis, dolor quis?</p>
      </div>
      <Div title="Proyectos" />
      <Proyect />

      <Div title="Referencias" />
      <References />
      <Div title="Experiencia" />
      <div class="image-container">
  <div>
    <img src="css.png" id="F" />
    <p id='Q'>Bases</p>
  </div>
  <div>
    <img src="js.png" id="f" />
    <p id='Q'>Bases</p>
  </div>
  <div>
  <img src="html.png" id="f" />
    <p id='Q'>Bases</p>
  </div>
</div>

  
    </main>
  );
};
