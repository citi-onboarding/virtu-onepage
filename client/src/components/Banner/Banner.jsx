import React,{useEffect, useState} from "react";
import axios from 'axios';



// import { Container } from './styles';

import "./Banner.css";

import logo_white from "../../assets/virtu-logo 2.svg";
import image from '../../assets/background.png'

const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

const title = ["Aplicamos ciência e construímos resultados"];

function Banner() {
const[banner, setBanner] = useState([])

const LoadBanner = async () =>{
      const res = await axios.get('http://localhost:3001/api/banner')
      setBanner(res.data)
    } 

    useEffect(()=>{
      LoadBanner()
    }, [])

  return (
    <div id="banner" className="banner-section">
    {banner?.map( banners =>{
          return(
              ( <div style={{background: `url(${banners.image})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundPosition: '32% 75px'}} className="img-bg" />) )
           })}
 
      <div className="text">
      {banner?.map( banners =>{
          return((
            <>
               <h1>{banners.title}</h1>
                <p>{banners.description}</p>
                <button>
                    <a href="#services" className="button-text">Nossos serviços</a>
                </button>
             </>
                ))
           })}
      </div>
      <div className="rectangle">
        <img id="logo-white" src={logo_white} alt="logo branca" />
      </div>
    </div>
  );
}
export default Banner;
