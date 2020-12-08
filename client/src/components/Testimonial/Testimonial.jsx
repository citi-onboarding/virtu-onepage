import React, {useState} from 'react'
import ReactDOM from 'react'
import Slide from './Slide'
import './css/testimonial.css'
import ClientDescription from './Client-Description'


import arrow_left from '../../assets/arrow leftSVG.svg'
import arrow_right from '../../assets/arrow rightSVG.svg'

const Name = [
    'Isabela Souza', 'Jorge Andre','Mariana marques', 'Ana maria'
]

const Func = [
	'Candidata a vereadora', 'Candidato a prefeito', 'N sei', 'n sei'
]

const Service = [
	'Pesquisa de opinião', 'outro serviço', 'outro serviço', 'n seiiii'
] 

const Description = [
	'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '2Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '3Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '4'
]

function Testimonial(){
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
function animation(Array){
	var op = 1
	var timer = setInterval(function(){
		if(op<=0.1){
			clearInterval(timer)
			Array.style.display = 'none'
		}else{
			Array.style.opacity = op
			Array.style.filter = 'alpha(opacity='+ op * 100 +")"
			op-=op*0.1
		}
	}, 500)
}
function change(){
let boto = document.querySelector('slick-active')
boto.setAttribute('id', 'user')
}
return(
<section id="testimonial">
	<div className="container">
 		<div className="parent-box">
	 		<div className="box-right">
				<h1>Depoimentos <br></br> dos nossos clientes</h1>
      				<ClientDescription 
                      NameofClient={currentName}
                      FuncofClient={currentFunc}
                      Service={currentService}
                      Description={currentDescription}
      			     /> 	
      			<div className="Arrows">
      				<img className="arrow_left" src={arrow_left} onClick={ArrowBack} alt="Arrow left" />	
      				<img className="arrow_right" src={arrow_right} onClick={ArrowForw} alt="Arrow right" />
      			</div>	
			</div>
 						<Slide />
       </div>
	</div>
</section>
)
}
export default Testimonial
