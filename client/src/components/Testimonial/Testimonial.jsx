import React, {useState} from 'react'
import ReactDOM from 'react'
import Slide from './Slide'
import './css/testimonial.css'
import ClientDescription from './Client-Description'

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
	'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '2Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '3Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
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
      			<div className="Arrows"></div>	
			</div>
 						<Slide />
       </div>
	</div>
</section>
)
}

export default Testimonial
