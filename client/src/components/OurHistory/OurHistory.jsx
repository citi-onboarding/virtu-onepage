import React from 'react';
import Box from './Box'
import './ourhistory.css';

const data = [
	"Visão", "Valores", "Missão"
]

const OurHistory = () => (
<section id="ourhistory">
<h2>hello</h2>
<Box title={data[2]} />
</section>
)

export default OurHistory;