import React from 'react';
import './Section.css';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { CiLinkedin } from 'react-icons/ci';
export const Section = () => {
  return (
    <div className="section">
      <section>
        <ul>
          <li>
            <a href="g">
              <FaWhatsapp /> 
            </a>
          </li>
          <li>
            <a href="g">
              <SiGmail /> 
            </a>
          </li>
          <li>
            <a href="g">
              <CiLinkedin /> 
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
