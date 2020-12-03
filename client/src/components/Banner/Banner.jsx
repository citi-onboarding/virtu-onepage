import React from 'react';

// import { Container } from './styles';

import './Banner.css';

import logo_white from '../../assets/virtu-logo 2.svg'

function Banner() {
  return (
      <div className="banner-section">
        <div className="text">
          <h1>Aplicamos ciência e construímos resultados</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button><h3 className = "button-text">Nossos serviços</h3></button>
        </div>
        <div className="rectangle">
          <img id = "logo-white" src={logo_white} alt="logo branca"/>
        </div>
      </div>
  )
}
export default Banner;