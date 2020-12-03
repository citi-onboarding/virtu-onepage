import React from 'react';

// import { Container } from './styles';

import './Footer.css';

import logo_white from '../../assets/virtu-logo 2.svg'
import hearth from '../../assets/hearth.svg'
import code_logo from '../../assets/code-icon.svg'


function Footer() {
  return (
      <div className="footer-section">
        <img src={logo_white} alt="logo branca"/>
        <p>Made with 
          <img src={hearth} alt="coracao" className="hearth-icon" />
           and 
          <img src={code_logo} alt="code" className="code_icon" />
           by CITi
        </p>
      </div>
  )
}

export default Footer;