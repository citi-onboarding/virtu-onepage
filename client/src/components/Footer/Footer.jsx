import React from 'react';

// import { Container } from './styles';

import './Footer.css';

import logo_white from '../../assets/virtu-logo 2.svg'

function Footer() {
  return (
      <div className="footer-section">
        <img src={logo_white} alt="logo branca"/>
        <p>Made with &lt;/&gt; and &#10084; by Citi</p>
      </div>
  )
}

export default Footer;