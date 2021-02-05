import React, {useEffect, useState} from 'react'
import Box from './Box'
import './css/ourhistory.css'
import axios from 'axios'
import url from '../../global/globalVars';


import waves_left from '../../assets/Grupo 5SVG.svg'//triangulo
import line_right from '../../assets/Caminho 1SVG.svg' //caminho
import triangles_mid from   '../../assets/Group 4SVG.svg'//triangulos meio

import icon_eye from '../../assets/eye 2SVG.svg'
import icon_hands from '../../assets/handshake 2SVG.svg'
import icon_arrow from'../../assets/arrowSVG.svg'

function OurHistory (){
	const[ourhistory, setOurHistory] = useState([])

		const LoadOurHistory = async () =>{
		const res = await axios.get(`${url}/api/ourhistory`)
		setOurHistory(res.data)
		} 

		useEffect(()=>{
		LoadOurHistory()
		}, [])

	return(
		<section id="ourhistory">
			<div className="container-ourhistory">
				<div className="img-left"><img src={waves_left} alt="vector"/></div>
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
							<Box title="Missão" icons={icon_arrow} text={Stories.Valores}  position="relative" />
							<Box title="Visão" icons={icon_hands} text={Stories.Visao} bgColor="#D55140"/>
							<Box title="Valores" icons={icon_eye} text={Stories.Missao} position="relative" />
						</div>
					)
				})}
			<div className="img-mid"><img src={triangles_mid} alt="vector" /></div>
		</div>
			<img className="img-right" src={line_right} alt="vector"/>
		</section>
	)
}
export default OurHistory;