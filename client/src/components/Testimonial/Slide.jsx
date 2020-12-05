import React from 'react'
import './css/slide.css'
import img_1 from './images/image 3.svg'
import img_2 from './images/image 4.svg' 


export default class Slide extends React.Component{
render(){
return(
<div className="nav-galeria" >
	<div className="nav-galeria-wraper">
		<div className="mini-img-wraper">
				<div className="mini-client-img"></div>
				<h2>{this.props.Name}</h2>
				<p>{this.props.Func}</p>
		</div>
	</div>
</div>
)
}
}
