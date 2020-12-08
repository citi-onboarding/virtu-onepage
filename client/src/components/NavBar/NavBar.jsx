import React, { useState } from "react";

import virtu_logo from "../../assets/virtu-logo 3.svg";
import menu from "../../assets/Menu.svg";
import ex from "../../assets/Ex.png";

import "./NavBar.css";

function NavBar() {

  const OpenClose = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
  }

  return (
    <> 


    <header className="navbar-section">
      <div className="connect">
        <img id="logo" src={virtu_logo} alt="Logo da Virtù" />
        <div className="sections">
          <img onClick = {() => setMobileMenu(!MobileMenu)} className="menu" src={menu} alt="Menu"/>
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
