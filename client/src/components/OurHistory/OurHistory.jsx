import React from 'react'
import Box from './Box'
import './css/ourhistory.css'

import vector_left from '../../assets/Grupo 5SVG.svg'//triangulo
import vector_right from '../../assets/Caminho 5SVG.svg' //caminho
import vector_midle from   '../../assets/Caminho 4SVG.svg'//triangulos meio

import icon_eye from '../../assets/eye 2SVG.svg'
import icon_hands from '../../assets/handshake 2SVG.svg'
import icon_arrow from'../../assets/arrowSVG.svg'

const titles = [
	"Visão", "Valores", "Missão"
]

const icons = [
    icon_eye, icon_hands, icon_eye
]

const text = [
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "texto2", "texto3"
]

const bgColor = [
'#D55140',
'linearGradient(#cc1701 90%, #991200 90%)'
]

const OurHistory = () => (
<section id="ourhistory">
<div className="container">
<div className="call">
<h1>Conheça nossa história</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div className="box-parent">
<Box title={titles[0]} icons={icons[0]} text={text[0]} bgColor={bgColor[0]} />
</div>
</div>
</section>
)

export default OurHistory;