import React, { Component } from "react"
import './css/ClientDescription.css'

function ClientDescription({ NameofClient, FuncofClient, Description, Service }) {
    return (
<>
<div className="Description-wraper">
       			<h2>{NameofClient}</h2>
 				<p id="p-1">{FuncofClient}</p>
 				<p id="p-2">Contratou: {Service}</p>
 				<p id="p-3">{Description}</p>
</div>
</>
    );
}

export default ClientDescription
 