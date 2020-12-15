
import React from 'react'

import './css/SlideCard.css'


function SlideCard({ NameofClient, FuncofClient, Image }) {
    return (
        <div className="mini-img-wraper">
               <div className="mini-client-img"><img src={Image}  alt="Testimonials Imagem" /></div>
                <h2>{NameofClient}</h2>
                <p>{FuncofClient}</p>
        </div>
    );
}

export default SlideCard