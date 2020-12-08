import React, { Component } from 'react';

import circle from '../../assets/Grupo 6.png'
import lines from '../../assets/Grupo 5.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

import Datas from './Datas'

import './LinkedIn.css';

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
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
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
    }
    
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
          <Slider {...settings}>
            <Datas title={titleLinkedIn} text={text} link={link}/>
            <Datas title={titleLinkedIn} text={text} link={link}/> 
            <Datas title={titleLinkedIn} text={text} link={link}/>
          </Slider>
          
        </div>
      </div>
    )
  }
}

export default LinkedIn;