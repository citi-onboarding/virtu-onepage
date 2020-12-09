import React, { Component } from 'react';

import circle from '../../assets/Grupo 6.png'
import lines from '../../assets/Grupo 5.png'
import arrow_left from '../../assets/Vector (2).svg'
import arrow_right from '../../assets/arrow rightSVG.svg'
import elipse1 from '../../assets/Ellipse 3.png'
import elipse2 from '../../assets/Ellipse 2.png'


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Datas from './Datas'

import './LinkedIn.css';
import './Carousel.css';

const title = [
  'Conheça nosso LinkedIn'
]

const subtitle = [
  'Visitar LinkedIn'
]

const titleLinkedIn = [
  'Título do LinkedIn título do LinkedIn título do LinkedIn',
]

const text = [
  'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
]

const link = [
  'https://react-slick.neostack.com/docs/get-started/'
]

class LinkedIn extends Component {
  
  render() {
    const settings = {
      centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    };
    
    
    return (
      <div className="LinkedIn-section">
        <div className="head">
          <img id="lines" src={lines} alt="linhas abstratas"/>
          <div className="title">
            <h1>{title}</h1>
            <a href="">{subtitle}</a>
          </div>
          <img id="circle" src={circle} alt=""/>
        </div>
        <div className="carousel">
          <Slider className="slider" {...settings}>
            <Datas title={titleLinkedIn} text={text} link={link}/>
            <Datas title={titleLinkedIn} text={text} link={link}/> 
            <Datas title={titleLinkedIn} text={text} link={link}/>
            <Datas title={titleLinkedIn} text={text} link={link}/>
          </Slider>
          <div className="set-center">
            <div className="navigate">
            <img src={arrow_left} id="left" alt="Seta à Esquerda"/>
            <img src={elipse1} alt=""/>
            <img src={elipse2} alt=""/>
            <img src={elipse1} alt=""/>
            <img src={arrow_right} alt="Seta à Direita"/>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}


export default LinkedIn;