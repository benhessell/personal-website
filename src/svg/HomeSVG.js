import React from 'react';

export default function HomeSVG(props) {

    const handleClick = () => {
        props.handleClick();
    }

  return (
      <div className='ds-home-svg' onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path className='ds-home-svg_inner' d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/>
        </svg>
      </div>

    );
}