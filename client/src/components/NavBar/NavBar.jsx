import React, { useState, useEffect } from "react";

import virtu_logo from "../../assets/virtu-logo 3.svg";
import menu from "../../assets/Menu.svg";
import ex from "../../assets/Ex.png";
import insta from "../../assets/Icone InstaSVG.svg";
import email from "../../assets/Icone e-mail.svg";
import Scrollscpy from 'react-scrollspy';

import "./NavBar.css";

function NavBar() {
  const [icon, setIcon] = useState(true);

// useEffect(() => {
//     let currentWidth = window.innerWidth;
// if (currentWidth.innerText > 768) {
//     setIcon(true);
// }

// }, []);

  
// // this is going to be fixed when all front is done.
//   window.addEventListener('scroll', function() { 
//     if (window.scrollY >= 0 && window.scrollY < 1080) {
//       document.querySelector('#first a').classList.remove("current");
//       document.querySelector('#second a').classList.remove("current");
//       document.querySelector('#third a').classList.remove("current");
//       document.querySelector('#fourth a').classList.remove("current");
//       document.querySelector('#fifth a').classList.remove("current");

//   } if (window.scrollY >= 1080 && window.scrollY < 1800) {
//         document.querySelector('#first a').classList.add("current");
//         document.querySelector('#second a').classList.remove("current");
//         document.querySelector('#third a').classList.remove("current");
//         document.querySelector('#fourth a').classList.remove("current");
//         document.querySelector('#fifth a').classList.remove("current");

//     } if (window.scrollY > 1800 && window.scrollY < 3240) {
//         document.querySelector('#first a').classList.remove("current");
//         document.querySelector('#second a').classList.add("current");
//         document.querySelector('#third a').classList.remove("current");
//         document.querySelector('#fourth a').classList.remove("current");
//         document.querySelector('#fifth a').classList.remove("current");
        
//     } if (window.scrollY > 3240 && window.scrollY < 4320) {
//         document.querySelector('#first a').classList.remove("current");
//         document.querySelector('#second a').classList.remove("current");
//         document.querySelector('#third a').classList.add("current");
//         document.querySelector('#fourth a').classList.remove("current");
//         document.querySelector('#fifth a').classList.remove("current");
        

//     } if (window.scrollY > 4320  && window.scrollY < 5400) {
//         document.querySelector('#first a').classList.remove("current");
//         document.querySelector('#second a').classList.remove("current");
//         document.querySelector('#third a').classList.remove("current");
//         document.querySelector('#fourth a').classList.add("current");
//         document.querySelector('#fifth a').classList.remove("current");
        

//     } if (window.scrollY > 5400) {
//         document.querySelector('#first a').classList.remove("current");
//         document.querySelector('#second a').classList.remove("current");
//         document.querySelector('#third a').classList.remove("current");
//         document.querySelector('#fourth a').classList.remove("current");
//         document.querySelector('#fifth a').classList.add("current");
//     }
//   });

  return (
    <>
      <header className="navbar-section">
        <div className="connect">
          <div className="on-web">
            <img id="logo" src={virtu_logo} alt="Logo da Virtù" />
            <Scrollscpy items={['ourhistory', 'ourServices', 'linkedin' ,'testimonial', 'contact-section' ]} currentClassName="spyclass" >
                  <li><a href="#ourhistory">Quem Somos</a></li>
                  <li><a href="#ourServices">Serviços</a></li>
                  <li><a href="#linkedin">LinkedIn</a></li>
                  <li><a href="#testimonial">Depoimentos</a></li>
                  <li><a href="#contact-section"> Fale Conosco</a></li>
              </Scrollscpy>
          </div>

          <div className="on-mobile">
            <div className="icon" onClick={() => setIcon(!icon)}>
              {icon ? (
                <img src={menu} alt="Menu" />
              ) : (
                <img src={ex} alt="Sair" />
              )}
            </div>

            <div className={ icon ? 'closed-menu' : 'open-menu'}>

              <ul className="list">
                  <li><a href="#ourhistory" onClick={() => setIcon(!icon)}>Quem Somos</a></li>
                  <li><a href="#ourServices" onClick={() => setIcon(!icon)}>Serviços</a></li>
                  <li><a href="#linkedin" onClick={() => setIcon(!icon)}>LinkedIn</a></li>
                  <li><a href="#testimonial" onClick={() => setIcon(!icon)}>Depoimentos</a></li>
                  <li><a href="#contact-section" onClick={() => setIcon(!icon)}> Fale Conosco</a></li>
              </ul>

              <footer>
                <img id="logo-mobile" src={virtu_logo} alt="" />
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
              </footer>

            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
