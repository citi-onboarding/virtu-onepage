import React from 'react';

import circle from '../../assets/Grupo 6.png'
import lines from '../../assets/Grupo 5.png'

import { Datas } from './components/Blog/Datas';

import './Blog.css';

const title = [
  'Conheça nosso blog'
]

const subtitle = [
  'Visitar blog'
]

function Blog() {
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
          <Datas />
        </div>
      </div>
  )
}

export default Blog;