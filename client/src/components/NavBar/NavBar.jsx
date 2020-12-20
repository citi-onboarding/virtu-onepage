import React, { useState, useEffect } from "react";

import virtu_logo from "../../assets/virtu-logo 3.svg";
import menu from "../../assets/Menu.svg";
import ex from "../../assets/Ex.png";
import insta from "../../assets/Icone InstaSVG.svg";
import email from "../../assets/Icone e-mail.svg";
import Scrollscpy from 'react-scrollspy';

import "./NavBar.css";

function NavBar() {
  const [mode, setMode] = useState({ menu });

  return (
    <>
      <header className="navbar-section">
        <div className="connect">
          <img id="logo" src={virtu_logo} alt="Logo da Virtù" />
          <div className="icon" onClick={() => setMode(!mode)}>
            {mode ? <img src={menu} alt="Menu" /> : <img src={ex} alt="Sair" />}
          </div>
          <div className="sections">
            <ul className="list" style={{ display: mode ? "flex" : "flex" }}>
              <Scrollscpy id="names" items={['ourhistory', 'ourServices', 'testimonial', 'contact-section' ]} currentClassName="spyclass" >
                  <li><a href="#ourhistory">Quem Somos</a></li>
                  <li><a href="#ourServices">Serviços</a></li>
                  {/* <li><a href="#linkedin">LinkedIn</a></li> */}
                  <li><a href="#testimonial">Depoimentos</a></li>
                  <li><a href="#contact-section"> Fale Conosco</a></li>
              </Scrollscpy>
              <div className="on-mobile">
                <img id="logo-mobile" src={virtu_logo} alt="" />
                <ul className="more-contact">
                  <li>
                    <p>@virtupolitica</p>
                    <img src={insta} alt="Instagram" />
                  </li>
                  <li>
                    <p>virtu@email.com</p>
                    <img src={email} alt="Email" />{" "}
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
