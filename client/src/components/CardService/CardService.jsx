import React from 'react';

import './CardService.css'

function CardService({ title, description, image, textColor, borderColor }) {
    return (
        <div className="card-service" style={{borderColor: borderColor}} >
            <div className="cs-title-image-container" >
                <img src={image} alt={title}/>
                <h2 style={{color: textColor}} >{title}</h2>
            </div>
            <p style={{color: textColor}} >{description}</p>
            <p style={{color: textColor}} >Saber mais</p>

        </div>
    );
}

export default CardService;