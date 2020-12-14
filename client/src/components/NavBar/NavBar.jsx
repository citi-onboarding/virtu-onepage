import React, { useState } from "react";

import virtu_logo from "../../assets/virtu-logo 3.svg";
import menu from "../../assets/Menu.svg";
import ex from "../../assets/Ex.png";
import insta from "../../assets/Icone InstaSVG.svg";
import email from "../../assets/Icone e-mail.svg";

import "./NavBar.css";

function NavBar() {
  const [icon, setIcon] = useState(true);

//   window.addEventListener('scroll', function() { 
//     if (window.scrollY >= 0 && window.scrollY < 546) {
//         document.querySelector('#names li:nth-child(1)').classList.add("current");
//         document.querySelector('#names li:nth-child(2)').classList.remove("current");
//         document.querySelector('#names li:nth-child(3)').classList.remove("current");
//         document.querySelector('#names li:nth-child(4)').classList.remove("current");
//         document.querySelector('#names li:nth-child(5)').classList.remove("current");

//     } if (window.scrollY > 546 && window.scrollY < 1680) {
//         document.querySelector('#names li:nth-child(1)').classList.remove("current");
//         document.querySelector('#names li:nth-child(3)').classList.remove("current");
//         document.querySelector('#names li:nth-child(4)').classList.remove("current");
//         document.querySelector('#names li:nth-child(5)').classList.remove("current");
//         document.querySelector('#names li:nth-child(2)').classList.add("current");
//     } if (window.scrollY > 1680 && window.scrollY < 2300) {
//         document.querySelector('#names li:nth-child(2)').classList.remove("current");
//         document.querySelector('#names li:nth-child(4)').classList.remove("current");
//         document.querySelector('#names li:nth-child(5)').classList.remove("current");
//         document.querySelector('#names li:nth-child(1)').classList.remove("current");
//         document.querySelector('#names li:nth-child(3)').classList.add("current");

//     } if (window.scrollY > 2300  && window.scrollY < 3130) {
//         document.querySelector('#names li:nth-child(3)').classList.remove("current");
//         document.querySelector('#names li:nth-child(5)').classList.remove("current");
//         document.querySelector('#names li:nth-child(1)').classList.remove("current");
//         document.querySelector('#names li:nth-child(2)').classList.remove("current");
//         document.querySelector('#names li:nth-child(4)').classList.add("current");

//     } if (window.scrollY > 3130) {
//         document.querySelector('#names li:nth-child(4)').classList.remove("current");
//         document.querySelector('#names li:nth-child(1)').classList.remove("current");
//         document.querySelector('#names li:nth-child(2)').classList.remove("current");
//         document.querySelector('#names li:nth-child(3)').classList.remove("current");
//         document.querySelector('#names li:nth-child(5)').classList.add("current");
//     }
//   });

  return (
    <>
      <header className="navbar-section">
        <div className="connect">
                    <ul className="onWeb">
                        <img id="logo" src={virtu_logo} alt="Logo da Virtù" />
                        <li><a href="#ourhistory">Quem Somos</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                        <li><a href="#testimonials">Depoimentos</a></li>
                        <li><a href="#contact-section"> Fale Conosco</a></li>
                    </ul>
                        
                                <div className="on-mobile">
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
