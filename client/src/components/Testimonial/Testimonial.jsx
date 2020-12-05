import React from 'react'
import Slide from './Slide'
import './css/Testimonial.css'

import icon_right from '../../assets/Group 4SVG.svg'
import arrow_left from '../../assets/arrow leftSVG.svg'
import arrow_right from '../../assets/arrow rightSVG.svg'



const Name = [
    'Isabela Souza'
]

const Func = [
	'Candidata a vereadora'
]

const Service = [
	'Pesquisa de opinião'
] 

const Desc = [
	'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
]
const Testimonial = () => (
<section id="testimonial">
<div className="container">
<div className="parent-box">
 	<div className="box-right">
 		<h1>Depoimentos <br></br> dos nossos clientes</h1>

 		<h2>{Name[0]}</h2>
 		<p id="p-1">{Func[0]}</p>
 		<p id="p-2">Contratou: {Service[0]}</p>

 		<p id="p-3">{Desc[0]}</p>
 	</div>{/*fotodestaque*/}
 	<Slide Name={Name[0]} Func={Func[0]} />
</div>
</div>{/*container*/}
</section>
)

export default Testimonial
