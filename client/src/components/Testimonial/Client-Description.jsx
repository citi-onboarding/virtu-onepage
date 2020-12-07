import React from 'react'

import './css/testimonial.css'


function ClientDescription({ NameofClient, FuncofClient, Description, Service }) {
    return (
<>
       			<h2>{NameofClient}</h2>
 				<p id="p-1">{FuncofClient}</p>
 				<p id="p-2">Contratou: {Service}</p>
 				<p id="p-3">{Description}</p>
</>
    );
}

export default ClientDescription
 