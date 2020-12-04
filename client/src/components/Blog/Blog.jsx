import React from 'react';

import circle from '../../assets/Grupo 6.png'
import lines from '../../assets/Grupo 5.png'

import './Blog.css';

function Blog() {
  return (
      <div className="blog-section">
        <div className="head">
          <img src={lines} alt="linhas abstratas"/>
          <div className="title">
            <h1>Conheça nosso blog</h1>
            <a href="">Visitar blog</a>
          </div>
          <img src={circle} alt=""/>
        </div>
      </div>
  )
}

export default Blog;