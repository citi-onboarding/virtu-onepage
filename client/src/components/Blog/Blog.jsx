import React, { Component } from 'react';

import circle from '../../assets/Grupo 6.png'
import lines from '../../assets/Grupo 5.png'

import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

import Datas from './Datas'

import './Blog.css';

const title = [
  'Conheça nosso blog'
]

const subtitle = [
  'Visitar blog'
]

const titleBlog = [
  'Título do blog título do blog título do blog',
]

const text = [
  'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
]

const link = [
  'https://react-slick.neostack.com/docs/get-started/'
]

class Blog extends Component {
  
  render() {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    }
    
    return (
      <div className="blog-section">
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
            <Datas title={titleBlog} text={text} link={link}/>
            <Datas title={titleBlog} text={text} link={link}/> 
            <Datas title={titleBlog} text={text} link={link}/>
          </Slider>
          
        </div>
      </div>
    )
  }
}

export default Blog;