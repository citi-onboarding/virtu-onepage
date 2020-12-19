import React from 'react'
import Box from './Box'
import './css/ourhistory.css'
import axios from 'axios'


import vector_left from '../../assets/Grupo 5SVG.svg'//triangulo
import vector_right from '../../assets/Caminho 6SVG.svg' //caminho
import vector_mid from   '../../assets/Group 4SVG.svg'//triangulos meio

import icon_eye from '../../assets/eye 2SVG.svg'
import icon_hands from '../../assets/handshake 2SVG.svg'
import icon_arrow from'../../assets/arrowSVG.svg'

const titles = [
	"Visão", "Valores", "Missão"
]

const icons = [
    icon_eye, icon_hands, icon_arrow
]

const text = [
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "texto2", "texto3"
]

const bgColor = [
'#D55140'
]

const position = [
'relative'
]

const OurHistory = () => (
<section id="ourhistory">
	<div className="container-ourhistory">
		<div className="img-left"><img src={vector_left} alt="vector"/></div>
			<div className="call">
				<h1>Conheça nossa história</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

		<div className="box-parent">
			<Box title={titles[2]} icons={icons[2]} text={text[0]}  position={position[0]} />
			<Box title={titles[0]} icons={icons[0]} text={text[0]} bgColor={bgColor[0]}/>
			<Box title={titles[1]} icons={icons[1]} text={text[0]} position={position[0]} />
		</div>
	<div className="img-mid"><img src={vector_mid} alt="vector" /></div>
</div>
	<div className="img-right"><img src={vector_right} alt="vector"/></div>
</section>
)

export default OurHistory;