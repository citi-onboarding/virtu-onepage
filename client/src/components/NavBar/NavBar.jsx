import React, { useState } from "react";

import virtu_logo from "../../assets/virtu-logo 3.svg";
import menu from "../../assets/Menu.svg";
import ex from "../../assets/Ex.png";
import insta from "../../assets/Icone InstaSVG.svg";
import email from "../../assets/Icone e-mail.svg";

import "./NavBar.css";

function NavBar() {
  const [icon, setIcon] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <header className="navbar-section">
        <div className="connect">
                    <div className="on-web">
                        <img id="logo" src={virtu_logo} alt="Logo da Virtù" />
                        <ul>
                        <li><a href="#ourhistory">Quem Somos</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                        <li><a href="#testimonials">Depoimentos</a></li>
                        <li><a href="#contact-section"> Fale Conosco</a></li>
                        </ul>
                    </div>
                        
                                <div className="on-mobile">
                                    <ul>
                                        <li><a href="#ourhistory">Quem Somos</a></li>
                                        <li><a href="#services">Serviços</a></li>
                                        <li><a href="#linkedin">LinkedIn</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#contact-section"> Fale Conosco</a></li>
                                    </ul>
                                        <img id="logo-mobile" src={virtu_logo} alt="" />
                                            <div className="icon" onClick={() => setIcon(!icon)}>
                                                {icon ? <img src={menu} alt="Menu" /> : <img src={ex} alt="Sair" />}
                                            </div>
                                        <ul className="more-contact">
                                        <li>
                                            <p>@virtupolitica</p>
                                            <img src={insta} alt="Instagram" />
                                        </li>
                                        <li>
                                            <p>virtu@email.com</p>
                                            <img src={email} alt="Email" />
                                        </li>
                                        </ul>
                                </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
