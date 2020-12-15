import React, {useEffect, useState} from 'react'
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

const bgColor = [
'#D55140'
]

const position = [
'relative'
]

function OurHistory (){
const[ourhistory, setOurHistory] = useState([])

    const LoadOurHistory = async () =>{
      const res = await axios.get('http://localhost:3001/api/ourhistory')
      setOurHistory(res.data)
    } 

    useEffect(()=>{
      LoadOurHistory()
    }, [])

return(
<section id="ourhistory">
	<div className="container">
		<div className="img-left"><img src={vector_left} alt="vector"/></div>
{ourhistory?.map(Stories => { 
		return(		 
			<div className="call">
				<h1>Conheça nossa história</h1>
				<p>{Stories.NossaHistoria}</p>
			</div>
 )
		})}
{ourhistory?.map(Stories => { 
		return( 
			<div className="box-parent">
				<Box title={titles[2]} icons={icons[2]} text={Stories.Valores}  position={position[0]} />
				<Box title={titles[0]} icons={icons[0]} text={Stories.Visao} bgColor={bgColor[0]}/>
				<Box title={titles[1]} icons={icons[1]} text={Stories.Missao} position={position[0]} />
			</div>
			)
		})}
	<div className="img-mid"><img src={vector_mid} alt="vector" /></div>
</div>
	<div className="img-right"><img src={vector_right} alt="vector"/></div>
</section>
)
}
export default OurHistory;