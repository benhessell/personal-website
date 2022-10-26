import React, {useEffect, useState} from 'react';

import Logo from '../../core-components/Logo.js';
import Button from '../../core-components/Button.js';
import MenuSVG from '../../svg/MenuSVG.js';
import CrossSVG from '../../svg/CrossSVG.js';


export default function Nav() {

  const widthChange = 1000;
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < widthChange);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const breakpoint = `(max-width: ${widthChange}px)`;

  useEffect(() => {
    const handleResize = () => {
        setIsMobileView(window.matchMedia(breakpoint).matches);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  const navButtons = (
    <div>
      <Button label="Home" href="#/" />
          <Button label="Projects" href="#/projects" />
          <Button label="Education" href="#/education" />
          <Button label="Tools" href="#/tools" />
    </div>
  )

const modalClasses= isModalOpen ? 'nav_mobile-modal nav_mobile-modal--open' : 'nav_mobile-modal'
  const mobileModal = (
    <div className={modalClasses}>
      <div className="nav_mobile-modal-top" style={isModalOpen ? {} : { display: 'none' }}>
        <div className="nav_mobile-modal-head">
          <CrossSVG  handleClick={handleModalClick} />
        </div>
      </div>
      <div className="nav_mobile-modal-options" style={isModalOpen ? {} : { display: 'none' }}>
        <div className="nav_mobile-modal-link-container">
          <a onClick={handleModalClick} href="#/" className="nav_mobile-modal-link">
            Home
          </a>
        </div> 
        <div className="nav_mobile-modal-link-container">
          <a onClick={handleModalClick} href="#/projects" className="nav_mobile-modal-link">
            Projects
          </a>
        </div> 
        <div className="nav_mobile-modal-link-container">
          <a onClick={handleModalClick} href="#/education" className="nav_mobile-modal-link">
            Education
          </a>
        </div> 
        <div className="nav_mobile-modal-link-container">
          <a onClick={handleModalClick} href="#/tools" className="nav_mobile-modal-link">
            Tools
          </a>
        </div> 
      </div>
    </div>
  )

  return (
    <div className="nav_container">
      <div className="nav">
        <div className="nav_logo">
          <Logo />
        </div>
        <div className="nav_options">
          {isMobileView ? <MenuSVG handleClick={handleModalClick} /> : navButtons }
        </div>
      </div>
        {mobileModal}
    </div>
  );
}