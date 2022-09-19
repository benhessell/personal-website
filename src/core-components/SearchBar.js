import React from 'react';

import SearchSVG from '../svg/SearchSVG';

export default function SearchBar(props) {

    const handleChange = (e) => {
        props.handleChange(e)
    }

    return (
        <div className="ds-searchbar">
            <input
                type='text'
                placeholder={props.placeholder}
                className='ds-searchbar_input'
                onChange={handleChange}
                value={props.value}
            />
            <div className='ds-searchbar_svg'>
                <SearchSVG />
            </div>
        </div>
    );
}