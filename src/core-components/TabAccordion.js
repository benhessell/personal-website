import React, { useState, useEffect } from 'react';

const TabAccordion = props => {
	const {
		id,
		className,
		sectionHeaders,
		sectionContent,
		type,
		responsiveWidthChange,
		...extraProps
	} = props;

    const [sectionOpen, setSectionOpen] = useState(0);

    let widthChange = responsiveWidthChange;
	if (!widthChange) {
		widthChange=800;
    }

    const [isMobileView, setIsMobileView] = useState(window.innerWidth < widthChange);
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

	const handleClick = (e) => {
		console.log('click');
		const section = e.target.name;
		if (type === 'accordion') {
			if (sectionOpen === parseInt(section)) {
				setSectionOpen(0);
			} else {
				setSectionOpen(parseInt(section));
			}
		} else {
			setSectionOpen(parseInt(section));
		}
	};

	const handleKeyPress = () => {

	};

	const tabAccordionHeader = (classes, header, index) => (
		<div className={classes} key={header}>
			<button
				onKeyPress={handleKeyPress}
				onClick={handleClick}
				name={index}
				className="ds-tab-accordion_header-button"
			>
				{header}
			</button>
		</div>
	);

	const tabAccordionContent = (classes, content) => (
		<div className={classes} key={content}>
			{content}
		</div>
	);


	const accordion = [];
	for (let i = 0; i < sectionHeaders.length; i++) {
		let headerClasses = 'ds-accordion_header ds-tab-accordion_header';
		let contentClasses = 'ds-accordion_content ds-tab-accordion_content';
		if (i + 1 === sectionOpen) {
			headerClasses = 'ds-accordion_header ds-tab-accordion_header ds-tab-accordion_header--open ds-tab-accordion_header--open';
			contentClasses = 'ds-accordion_content ds-tab-accordion_content ds-accordion_content--open ds-tab-accordion_content--open';
		}
		const section = (
			<div className="ds-accordion_section" key={sectionHeaders[i]}>
				{tabAccordionHeader(headerClasses, sectionHeaders[i], i + 1)}
				{tabAccordionContent(contentClasses, sectionContent[i])}
			</div>
		);
		accordion.push(section);
	}

	const tab = [];
	for (let i = 0; i < sectionHeaders.length; i++) {
		let headerClasses = 'ds-tab_header ds-tab-accordion_header';
		if (i === sectionOpen) {
			headerClasses = 'ds-tab_header ds-tab-accordion_header ds-tab_header--open ds-tab-accordion_header--open';
		}

		const header = tabAccordionHeader(headerClasses, sectionHeaders[i], i);
		tab.push(header);
	}
	for (let i = 0; i < sectionContent.length; i++) {
		let contentClasses = 'ds-tab_content ds-tab-accordion_content';
		if (i === sectionOpen) {
			contentClasses = 'ds-tab_content ds-tab-accordion_content ds-tab_content--open ds-tab-accordion_content--open';
		}

		const content = tabAccordionContent(contentClasses, sectionContent[i]);
		tab.push(content);
	}

	return (
		<div
			className="ds-tab-accordion"
			id={id}
			{...extraProps}
		>
			{(type === 'accordion') && accordion}
			{(type === 'tab') && tab}
			{(type === 'responsive') && isMobileView && accordion}
			{(type === 'responsive') && !isMobileView && tab}
		</div>
	);
};

export default TabAccordion;