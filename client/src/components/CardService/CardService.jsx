import React from 'react';

import './CardService.css'

function CardService({ title, description, image, textColor, borderColor, bckColor, id }) {
    return (
        <div className="card-service" id={id} style={{borderColor: borderColor}} >
            <div className="cs-title-image-container" >
                <img src={image} alt={title} style={{backgroundColor: bckColor}} />
                <h2 style={{color: textColor, backgroundColor: bckColor}} >{title}</h2>
            </div>
            <p style={{color: textColor}} >{description}</p>
            <a href="#contact-section" style={{color: textColor}} >Saber mais</a>

        </div>
    );
}

export default CardService;