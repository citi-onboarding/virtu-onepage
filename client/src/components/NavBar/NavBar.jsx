import React, { useState, useEffect } from "react";

import virtu_logo from "../../assets/virtu-logo 3.svg";
import menu from "../../assets/Menu.svg";
import ex from "../../assets/Ex.png";

import "./NavBar.css";

function NavBar() {

  const [mode, setMode] = useState({menu});

  return (
    <> 
    <header className="navbar-section">
      <div className="connect">
        <img id="logo" src={virtu_logo} alt="Logo da Virtù" />
        <div className="sections">
          <div className="icon" onClick = {() => setMode(!mode)} >
  
           { mode ?  <img src={menu} alt="Menu"/>  : <img src={ex} alt="Sair" /> }
            
          </div>
         
          <ul className="list">
            <li>
              <a className = "current" href="">Quem Somos</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Posts</a>
            </li>
            <li>
              <a href="">Depoimentos</a>
            </li>
            <li>
              <a href=""> Fale Conosco</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
}

export default NavBar;
