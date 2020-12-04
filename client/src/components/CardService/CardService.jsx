import React from 'react';

import './CardService.css'

function CardService({ title, description, icon }) {
    return (
        <div className="card-service">
        <img src={icon} alt={title}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Saber mais</p>
        </div>
    );
}

export default CardService;