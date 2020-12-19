import React from 'react';

import circle from '../../assets/Grupo 6.png'
import lines from '../../assets/Grupo 5.png'
import arrow_left from '../../assets/Vector (3).svg'
import arrow_right from '../../assets/arrow rightSVG.svg'
import elipse1 from '../../assets/Ellipse 3.png'
import elipse2 from '../../assets/Ellipse 2.png'


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Datas from './Datas'

import './LinkedIn.css';
import './Carousel.css';

const text = [
  'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
]

const link = [
  'https://react-slick.neostack.com/docs/get-started/'
]

function LinkedIn(){
    const settings = {
      centerMode: true,
      dots: true,
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
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 0
      }
    }
  ]
    };
      
     return (
      <div className="LinkedIn-section">
        <div className="head">
          <img id="lines" src={lines} alt="linhas abstratas"/>
          <div className="title">
            <h1>Conheça nosso LinkedIn</h1>
            <a href="">Visitar LinkedIn</a>
          </div>
          <img id="circle" src={circle} alt="Vetor"/>
        </div>
        <div className="carousel">
          <Slider className="slider" {...settings}>
            <Datas title="Titulo mto bom" text={text} link={link}/>
            <Datas title="Titulo mto bom" text={text} link={link}/> 
            <Datas title="Titulo mto bom" text={text} link={link}/>
            <Datas title="Titulo mto bom" text={text} link={link}/>
          </Slider>
          <div className="set-center">
            <div className="arrows">
            <img 
            src={arrow_left} 
            alt="Anterior"
            />
            <img 
            src={arrow_right} 
            alt=""
            />
          </div>
          </div>
          
        </div>
      </div>
    )
  }

export default LinkedIn;