import React, { Component } from "react"
import Slider from "react-slick"
import SlideCard from './Slide-card'


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

export default class Slide extends React.Component{

render(){
  // Creating the components for the next and previous arrow
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
          // when you lick in the arrow from the mobile version, it will simulate a click on the arrow from the web version
          document.querySelector(".slick-prev.slick-arrow").click();
        }}
      />
      <ul className="dot-container"> {dots} </ul>
      <NextArrow
        className="Next"
        id="Next"
        onClick={() => {
          // when you lick in the arrow from the mobile version, it will simulate a click on the arrow from the web version
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
<div className="nav-galeria" >
<div  className="icon_right">
<img src={icon_right} />
</div>
	<Slider  {...settings}>
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
)
}
}
