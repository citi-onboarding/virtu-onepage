import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import SlideCard from './Slide-card'
import axios from 'axios'

import ClientDescription from './Client-Description'


import './css/slide.css'
import "slick-carousel/slick/slick.css"

import icon_right from '../../assets/Group 4SVG.svg'

function Slide(){

const[testimonial, setTestimonial] = useState([])

const LoadTestimonial = async () =>{
      const res = await axios.get('http://localhost:3001/api/testimonial')
      setTestimonial(res.data)
    } 

    useEffect(()=>{
        LoadTestimonial()
    }, [])

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
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerPadding: "60px",
      adaptiveHeight: false,
      speed: 500,
       appendDots: (dots) => (
    <div>
      <PrevArrow
        className="Prev"
        onClick={() => {
          document.querySelector("#testimonial .parent-box .slick-prev.slick-arrow").click();
        }}
      />
      <ul className="dot-container"> {dots} </ul>
      <NextArrow
        className="Next"
        id="Next"
        onClick={() => {
          document.querySelector("#testimonial .parent-box .slick-next").click();
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
  {testimonial?.map( testimonies =>{
          return(
              (<div className="ClientDescription-wraper">
              <ClientDescription 
                      NameofClient={testimonies.title}
                      FuncofClient={testimonies.subtitle}
                      Service={testimonies.reason}
                      Description={testimonies.description}
                 /> 
               </div>)
             )
           })}
 
  </Slider>
  </div>
  <div className="nav-galeria" >
 <div  className="icon_right">
<img src={icon_right} alt="icone_direita" />
</div>
	<Slider  {...settings} className="one-slide"
   asNavFor={nav2}
   ref={slider => (slider1 = slider)}

  >

   {testimonial?.map( testimonies =>{
          return(
              (<div className="ClientDescription-wraper">
              <SlideCard


                NameofClient={testimonies.title}
                Image={testimonies.image[0]?.url}
                FuncofClient={testimonies.subtitle}


                />
               </div>)
             )
           })}
	</ Slider>

</div>
</>
)
}

export default Slide

