
import React from 'react'

import './css/SlideCard.css'


function SlideCard({ NameofClient, FuncofClient, image, id }) {
    return (
        <div className="mini-img-wraper" id={id} >
               <div className="mini-client-img"></div>
                <h2>{NameofClient}</h2>
                <p>{FuncofClient}</p>
        </div>
    );
}

export default SlideCard