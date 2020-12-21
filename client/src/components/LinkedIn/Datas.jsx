import React from 'react';

import './Datas.css';

export default class Datas extends React.Component{
    render(){
    return(
    <div className="datas">
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <a href={this.props.link} target="_blank">Ler o post completo</a>
    </div>
    )
    }
    }
    