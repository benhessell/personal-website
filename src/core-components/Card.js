import React from 'react';
import classnames from 'classnames';

const Card = props => {
    const {
        children,
        elevated,
        handleClick,
        banner,
        className,
        style,
    } = props

    const clickHandler = () => {
        handleClick();
    }

    const classes = classnames(
        className,
        'ds-card',
        {
            'ds-card_elevated': elevated,
        }
    );

    return (
        <div 
            className={classes}
            onClick={clickHandler}
        >
        {banner && <div className='ds-card_banner' style={style}/>}
        <div 
            className='ds-card_content'
        >
            {children}
        </div>
        </div>
    )
}

export default Card;