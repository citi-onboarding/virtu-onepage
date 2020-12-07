import React from 'react'
import Slide from './Slide'
import ClientDescription from './Client-Description'
import './css/testimonial.css'


import icon_right from '../../assets/Group 4SVG.svg'
import arrow_left from '../../assets/arrow leftSVG.svg'
import arrow_right from '../../assets/arrow rightSVG.svg'

const Name = [
    'Isabela Souza', 'Outra pessoa'
]

const Func = [
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
      			<ClientDescription 
                      NameofClient={Name[0]}
                      FuncofClient={Func[0]}
                      Service={Service[0]}
                      Description={Description[0]}
      			/> 				
			</div>
 						<Slide />
       </div>
	</div>{/*container*/}
</section>
)

export default Testimonial
