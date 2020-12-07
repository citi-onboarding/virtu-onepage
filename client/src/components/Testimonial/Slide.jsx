
import React, { Component } from "react"
import Slider from "react-slick"
import './css/slide.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img_1 from './images/image 3.svg'
import img_2 from './images/image 4.svg' 
import img_3 from './images/image 5.svg'

const  photos = [
 	img_1, img_2, img_3
]

const NameofClient = [
    'Isabela Souza', 'Outra pessoa'
]

const FuncofClient = [
	'Candidata a vereadora', 'Outra função'
]

const Service = [
	'Pesquisa de opinião', 'outro serviço'
] 

const Description = [
	'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
]


export default class Slide extends React.Component{
render(){
	 const settings = {
      className: "",
      centerMode: false,
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      infinite: true,
      centerPadding: "60px",
      adaptiveHeight: true,
      speed: 500
    }
return(
<div className="nav-galeria" >
	<Slider  {...settings}>
		<div className="mini-img-wraper">
				<div className="mini-client-img"></div>
				<h2>{NameofClient[0]}</h2>
				<p>{NameofClient[0]}</p>
		</div>
		<div className="mini-img-wraper">
				<div className="mini-client-img">1</div>
				<h2>{NameofClient[1]}</h2>
				<p>{FuncofClient[1]}</p>
		</div>
		<div className="mini-img-wraper">
				<div className="mini-client-img">2</div>
				<h2>{NameofClient[1]}</h2>
				<p>{FuncofClient[1]}</p>
		</div>
		<div className="mini-img-wraper">
				<div className="mini-client-img">3</div>
				<h2>{NameofClient[1]}</h2>
				<p>{FuncofClient[1]}</p>
		</div>
		<div className="mini-img-wraper">
				<div className="mini-client-img">4</div>
				<h2>{NameofClient[1]}</h2>
				<p>{FuncofClient[1]}</p>
		</div>
		<div className="mini-img-wraper">
				<div className="mini-client-img">5</div>
				<h2>{NameofClient[1]}</h2>
				<p>{FuncofClient[1]}</p>
		</div>
	</ Slider>
</div>

)
}
}
