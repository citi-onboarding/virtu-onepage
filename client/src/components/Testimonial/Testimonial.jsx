import React from 'react'
import Slide from './Slide'
import './css/testimonial.css'


import icon_right from '../../assets/Group 4SVG.svg'
import arrow_left from '../../assets/arrow leftSVG.svg'
import arrow_right from '../../assets/arrow rightSVG.svg'

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

const Testimonial = () => (
<section id="testimonial">
	<div className="container">
 		<div className="parent-box">
 			<div className="box-right">
 				<h1>Depoimentos <br></br> dos nossos clientes</h1>
      
 				<h2>{NameofClient[0]}</h2>
 				<p id="p-1">{FuncofClient[0]}</p>
 				<p id="p-2">Contratou: {Service[0]}</p>

 				<p id="p-3">{Desc[0]}</p>
			</div>
 						<Slide />
       </div>
	</div>{/*container*/}
</section>
)

export default Testimonial
