import React from 'react';

const Input = props => {
    const {
        label,
        placeholder,
        type
    } = props

    return (
        <div className="ds-formfield_container">
            <label className="ds-input_label" htmlFor="input">{label}</label>
            <input type={type} placeholder={placeholder} className="ds-input" id="input" />
        </div>
    )
}

export default Input;