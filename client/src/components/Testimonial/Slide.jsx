import React, { Component, useState, useEffect } from "react"
import Slider from "react-slick"
import SlideCard from './Slide-card'

import ClientDescription from './Client-Description'


import './css/slide.css'
import "slick-carousel/slick/slick.css"

import icon_right from '../../assets/Group 4SVG.svg'
import img_1 from './images/image 3.svg'
import img_2 from './images/image 4.svg' 
import img_3 from './images/image 5.svg'
import img_4 from './images/image 3.svg'

const Name = [
    'Isabela Souza', 'Jorge André', 'Walter Lima', 'Ana Maria'
]

const Func = [
	'Candidata a vereadora', 'Outra função', 'Candidato a prefeito', 'Governadora'
]

const Image = [
  img_1, img_2, img_3, img_4
]


const Service = [
  'Pesquisa de opinião', 'outro serviço1', 'outro serviço2', 'outro serviço3'
] 

const Description = [
  'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '2Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '3Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', '4Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
]

function Slide(){

const [nav1, setNav1] = useState(null)
const [nav2, setNav2] = useState(null)
    let slider1 = []
    let slider2 = []

    React.useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

function NextArrow(props) {
  return <div className={props.className} onClick={props.onClick} id={props.id} />;
}

function PrevArrow(props) {
  return <div className={props.className} onClick={props.onClick} />;
}
	 const settings = {
      className: "center",
      centerMode: false,
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      infinite: true,
      centerPadding: "60px",
      adaptiveHeight: false,
      speed: 500,
       appendDots: (dots) => (
    <div>
      <PrevArrow
        className="Prev"
        onClick={() => {
          document.querySelector(".slick-prev.slick-arrow").click();
        }}
      />
      <ul className="dot-container"> {dots} </ul>
      <NextArrow
        className="Next"
        id="Next"
        onClick={() => {
          document.querySelector(".slick-next").click();
        }}
      />
    </div>
  ),
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   }
return(
<>
<div className="box-right">
  <h1>Depoimentos <br></br> dos nossos clientes</h1>
  <Slider
          asNavFor={nav1}
          ref={slider => (slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={false}
          focusOnSelect={false}
          arrows={false}
  >
  <div className="ClientDescription-wraper">
              <ClientDescription 
                      NameofClient={Name[0]}
                      FuncofClient={Func[0]}
                      Service={Service[0]}
                      Description={Description[0]}
                 /> 
   </div>
   <div className="ClientDescription-wraper">
              <ClientDescription 
                      NameofClient={Name[1]}
                      FuncofClient={Func[1]}
                      Service={Service[1]}
                      Description={Description[0]}
                 /> 
   </div>
   <div className="ClientDescription-wraper">
              <ClientDescription 
                      NameofClient={Name[2]}
                      FuncofClient={Func[2]}
                      Service={Service[2]}
                      Description={Description[2]}
                 /> 
   </div>
   <div className="ClientDescription-wraper">
              <ClientDescription 
                      NameofClient={Name[3]}
                      FuncofClient={Func[3]}
                      Service={Service[3]}
                      Description={Description[3]}
                 /> 
   </div>
  </Slider>
  </div>
  <div className="nav-galeria" >
 <div  className="icon_right">
<img src={icon_right} />
</div>
	<Slider  {...settings} className="one-slide"
   asNavFor={nav2}
   ref={slider => (slider1 = slider)}

  >
	<SlideCard 

	
      NameofClient={Name[0]}
      FuncofClient={Func[0]}
      Image={Image[0]}


	/>
	<SlideCard 

	
      NameofClient={Name[1]}
      FuncofClient={Func[1]}
      Image={Image[1]}

	/>
  <SlideCard 

  
      NameofClient={Name[2]}
      FuncofClient={Func[2]}
      Image={Image[2]}

  />
	<SlideCard 

	
      NameofClient={Name[3]}
      FuncofClient={Func[3]}
      Image={Image[3]}

	/>

	</ Slider>

</div>
</>
)
}

export default Slide

