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

const OurHistory = () => (
<section id="ourhistory">
<h2>hello</h2>
<Box title={titles[0]} />
</section>
)

export default OurHistory;