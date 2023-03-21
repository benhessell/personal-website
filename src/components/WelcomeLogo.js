import React, {useState} from 'react';

export default function WelcomeLogo() {

  return (
      <div class="logo_flex">
        <div class="logo-animation_container">
          <svg width="70" height="70">
            <path class="logo_svg" d="M 10 10 H 60 V 60 H 10 Z" fill="transparent" stroke="white"/>
          </svg>
          <p class="logo_p">BH</p>
        </div>
      </div>
    );
}