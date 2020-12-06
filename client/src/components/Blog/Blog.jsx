import React from 'react';

import circle from '../../assets/Grupo 6.png'
import lines from '../../assets/Grupo 5.png'
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
  'Título do blog título do blog título do blog',
  'Título do blog título do blog título do blog',
]

const textBlog = [
  'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
]

const clickHere = [
  'Ler post completo'
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
          <div>
            <h2>{titleBlog[0]}</h2>
            <p>{textBlog[0]}</p>
            <a href="">{clickHere}</a>
          </div>
          <div>
            <h2>{titleBlog[1]}</h2>
            <p>{textBlog[1]}</p>
            <a href="">{clickHere}</a>
          </div>
          <div>
            <h2>{titleBlog[2]}</h2>
            <p>{textBlog[2]}</p>
            <a href="">{clickHere}</a>
          </div>
        </div>
      </div>
  )
}

export default Blog;