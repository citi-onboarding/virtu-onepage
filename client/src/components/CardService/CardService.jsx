import React from 'react';

import './CardService.css'

function CardService({ title, description, image, textColor, borderColor }) {
    return (
        <div className="card-service">
            <div className="cs-title-image-container">
                <img src={image} alt={title}/>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
            <p>Saber mais</p>

        </div>
    );
}

export default CardService;