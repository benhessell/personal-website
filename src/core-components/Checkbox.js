import React from 'react';

const Checkbox = props => {
    const {
        label,
        value,
    } = props

    const handleChange = (e) => {
        props.handleChange(e)
    }

    return (
        <div className="ds-formfield_container">
            <input type="checkbox" className="ds-checkbox" id="checkbox" value={value} onChange={handleChange}/>
            <label className="ds-checkbox_label" htmlFor="checkbox">{label}</label>
        </div>
    )
}

export default Checkbox;