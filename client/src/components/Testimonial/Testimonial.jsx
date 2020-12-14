import React, {useState, useEffect} from 'react'
import Slide from './Slide'
import './css/testimonial.css'
/*import ClientDescription from './Client-Description'*/
/*
const Name = [
    'Isabela Souza', 'Jorge André', 'Walter Lima', 'Ana Maria'
]

const Func = [
	'Candidata a vereadora', 'Outra função', 'Candidato a prefeito', 'Governadora'
]


const Service = [
	'Pesquisa de opinião', 'outro serviço1', 'outro serviço2', 'outro serviço3'
] 

const Description = [
	'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '2Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '3Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '4Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
]
*/
function Testimonial(){
/*
const [currentName, setName] = useState('')
const [currentFunc, setFunc] = useState('')
const [currentService, setService] = useState('')
const [currentDescription, setDescription] = useState('')

const[position, setPosition] = useState(0)

const ArrowForw = () => {
	GetPosition(Name)
	GetPosition(Func)
	GetPosition(Service)
	GetPosition(Description)
}

function GetPosition (Array) {
	const pos = position + 1 === Array.length?0:position + 1
	setPosition(pos)
}

React.useEffect(()=>{
	setName(Name[position])
	setFunc(Func[position])
	setService(Service[position])
	setDescription(Description[position])
},
[position])


const[BackPosition, setBackPosition] = useState(0)

const ArrowBack= () =>{
 GetLastPosition(Name)
 GetLastPosition(Func)
 GetLastPosition(Service)
 GetLastPosition(Description)
}

function GetLastPosition(Array){
	const Last= BackPosition <= Array.length && BackPosition !== 0?BackPosition-1:Array.length-1
	setBackPosition(Last)
}

React.useEffect(()=>{
	setName(Name[BackPosition])
	setFunc(Func[BackPosition])
	setService(Service[BackPosition])
	setDescription(Description[BackPosition])
}, 
[BackPosition])

//ArrowForw
React.useEffect(()=>{
	window.document.querySelector('.slick-next').addEventListener('click', ArrowForw)
	return () =>{
		window.removeEventListener('click', ArrowForw)
	}
})

//ArrowBack
React.useEffect(()=>{
	window.document.querySelector('.slick-prev').addEventListener('click', ArrowBack)
	return () =>{
		window.removeEventListener('click', ArrowBack)
	}
})


let currentBullet = window.document.querySelector('.slick-active')
const Goto = (Bullet) =>{
if( currentBullet == Bullet ){
setName(Name[0])
setFunc(Func[0])
setService(Service[0])
setDescription(Description[0])
}
}
//Bullets 
React.useEffect(()=>{	
	const bullets = window.document.querySelectorAll('.dot-container button')
	bullets.item(0).addEventListener('click', Goto)
	return () =>{
		window.removeEventListener('click', Goto)
	}
})
*/
return(
<section id="testimonial">
	<div className="container">
 		<div className="parent-box">
	 		<div className="box-right">
				<h1>Depoimentos <br></br> dos nossos clientes</h1>
			</div>
 						<Slide />
       </div>
	</div>
</section>
)
}

export default Testimonial
