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

function NextArrowCenter(props) {
  return <div className={props.className} onClick={props.onClick} id={props.id} />;
}

function PrevArrowCenter(props) {
  return <div className={props.className} onClick={props.onClick} />;
}
    const settings = {
      centerMode: true,
      dots: true,
      slideToScroll: 1,
      centerPadding: '0.9px',
      slidesToShow: 3,
      focusOnSelect: true,
      appendDots: (dots) => (
        <div className="assets-container">
            <PrevArrowCenter
                  className="Prev-CenterCarousel"
              onClick={() => {
              document.querySelector(".slick-prev.slick-arrow").click();
              }}
             />
      <ul className="dot-container-CenterCarousel"> {dots} </ul>
          <NextArrowCenter
            className="Next-CenterCarousel"
            id="Next-center"
            onClick={() => {
            document.querySelector(".slick-next").click();
            }}
            />
        </div>
  ),
  nextArrow: <NextArrowCenter />,
  prevArrow: <PrevArrowCenter />,

      responsive: [
    {
      breakpoint: 888,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
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
            <a href="#">Visitar LinkedIn</a>
          </div>
          <img id="circle" src={circle} alt="Vetor"/>
        </div>
        <div className="carousel">
          <Slider className="slider" {...settings}>
            <Datas title="Titulo mto bom1" text={text} link={link}/>
            <Datas title="Titulo mto bom2" text={text} link={link}/> 
            <Datas title="Titulo mto bom3" text={text} link={link}/>
            <Datas title="Titulo mto bom4" text={text} link={link}/>
          </Slider>
          
        </div>
      </div>
    )
  }

export default LinkedIn;