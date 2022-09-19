import React, { useState } from 'react';

const Radio = props => {
    const {
        items,
        name,
        label
    } = props


    return (
        <div className="ds-formfield_container">
            <label className="ds-checkbox_title">{label}</label>
            {items.map((item) => (
                <div>
                    <input className="ds-checkbox" type="radio" id={item} name={name} value={item} />
                    <label className="ds-checkbox_label" htmlFor={item}>{item}</label>
                </div>
                )
            )}
        </div>

    )
}

export default Radio

// Make radio component horizontal option