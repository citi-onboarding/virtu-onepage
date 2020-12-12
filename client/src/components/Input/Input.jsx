import React from 'react';

import './Input.css';

function Input({ name, placeholder, width, marginTop, value, funcOnChange }) {
    return (
        <div className="input-line-container" style={{width: width,}} >
            <input type="text" value={value} name={name} placeholder={placeholder} style={{marginTop: marginTop}} onChange={funcOnChange} />
            <div className="white-line"></div>
        </div>
    );
}

export default Input;