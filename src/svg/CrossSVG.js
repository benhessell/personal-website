import React from 'react';

export default function CrossSVG(props) {

    const handleClick = () => {
        console.log("click");
        props.handleClick();
    }

  return (
      <div className='ds-cross-svg' onClick={handleClick}>
        <svg className="ds-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M23.25 23.999a.743.743 0 01-.53-.22L12 13.06 1.28 23.779a.744.744 0 01-1.06 0 .752.752 0 010-1.061l10.72-10.72L.22 1.279C.078 1.138 0 .949 0 .749S.078.36.22.219c.141-.142.33-.22.53-.22s.389.078.53.22L12 10.938 22.72.218a.744.744 0 011.06 0 .747.747 0 010 1.061l-10.72 10.72 10.72 10.72a.752.752 0 010 1.061.746.746 0 01-.53.219z"></path>
        </svg>
      </div>

    );
}