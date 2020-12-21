import React, {useEffect, useState} from 'react'
import Box from './Box'
import './css/ourhistory.css'
import axios from 'axios'
import url from '../../global/globalVars';


import vector_left from '../../assets/Grupo 5SVG.svg'//triangulo
import vector_right from '../../assets/Caminho 6SVG.svg' //caminho
import vector_mid from   '../../assets/Group 4SVG.svg'//triangulos meio

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
					<Box title="Missão" icons={icon_arrow} text={Stories.Valores}  position="relative" />
					<Box title="Visão" icons={icon_hands} text={Stories.Visao} bgColor="#D55140"/>
					<Box title="Valores" icons={icon_eye} text={Stories.Missao} position="relative" />
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