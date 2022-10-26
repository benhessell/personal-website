import React from 'react';

const Button = props => {
    const {
        label,
        href
    } = props

    return (
        <form className="btn-form" action={href}>
            <input type="Submit" value={label} className="btn-1 btn-lg nav_btn" />
        </form>
    )
}

export default Button;