import React from 'react';

import './Input.css';

function Input({ name, placeholder, width, marginTop, value, funcOnChange }) {
    return (
        <div className="input-line-container">
            <input type="text" value={value} name={name} placeholder={placeholder} style={{width: width, marginTop: marginTop}} onChange={funcOnChange} />
            <div className="white-line"></div>
        </div>
    );
}

export default Input;