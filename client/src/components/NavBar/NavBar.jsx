import React from 'react';

import virtu_logo from '../../assets/virtu-logo 3.svg'

import './NavBar.css';

function NavBar() {
  return (
      <header className="navbar-section">
        <div className="connect">
          <img id="logo" src={virtu_logo} alt="Logo da Virtù"/>
          <div className="sections">
            <ul>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Serviços</a></li>
              <li><a href="">Posts</a></li>
              <li><a href="">Depoimentos</a></li>
              <li><a href="">Fale Conosco</a></li>
            </ul>
        </div>
      </div>
        
      </header>
  )
}

export default NavBar;