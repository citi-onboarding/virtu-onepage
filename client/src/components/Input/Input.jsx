import React from 'react';

import './Input.css';

function Input({ name, placeholder, width, marginTop }) {
    return (
        <div className="input-line-container">
            <input type="text" name={name} placeholder={placeholder} style={{width: width, marginTop: marginTop}} />
            <div className="white-line"></div>
        </div>
    );
}

export default Input;