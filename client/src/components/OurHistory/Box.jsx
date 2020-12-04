import React from 'react'
import './css/box.css'


export default class Box extends React.Component{
render(){
return(
<div className="box-single" style={{backgroundColor: this.props.bgColor } }>
<img src={this.props.icons} alt="Eye" />
<h2>{this.props.title}</h2>
<p>{this.props.text}</p>
</div>
)
}
}
