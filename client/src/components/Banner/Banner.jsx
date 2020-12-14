import React from "react";

// import { Container } from './styles';

import "./Banner.css";

import logo_white from "../../assets/virtu-logo 2.svg";

const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

const title = ["Aplicamos ciência e construímos resultados"];

function Banner() {
  return (
    <div id="banner" className="banner-section">
      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
        <button>
          <a href="#services" className="button-text">Nossos serviços</a>
        </button>
      </div>
      <div className="rectangle">
        <img id="logo-white" src={logo_white} alt="logo branca" />
      </div>
    </div>
  );
}
export default Banner;
