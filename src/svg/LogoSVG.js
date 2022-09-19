import React from 'react';

export default function LogoSVG() {

  return (
      <div className="ds-logo_svg-container">
        <svg width="70" height="70">
          <path className="ds-logo_svg" d="M 10 10 H 60 V 60 H 10 Z" fill="transparent" stroke="white"/>
        </svg>
        <p className="ds-logo_p">BH</p>
      </div>
    );
}

