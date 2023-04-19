import React, { useState } from 'react';
import classnames from 'classnames';
import DownArrowSVG from '../svg/DownArrow';
import UpArrowSVG from '../svg/UpArrow';

const Accordion = props => {
	const {
		className,
		header,
        content,
		inverse,
		...extraProps
	} = props;

    const [sectionOpen, setSectionOpen] = useState(false);

    const handleClick = (e) => {
        console.log('click');
		setSectionOpen(!sectionOpen);
	};

	const accordionHeader = () => (
		<div className={'ds-accordion_section ds-accordion_header'}  onClick={handleClick}>
			<span>{header}</span>
			{sectionOpen ? <UpArrowSVG /> : <DownArrowSVG />}
		</div>
	);

	const accordionContent = () => (
		<div className='ds-accordion_section ds-accordion_content'>
			{content}
		</div>
	);

	const classes = classnames(
		className,
        'ds-accordion',
        {
            'ds-accordion-open': sectionOpen,
			'ds-accordion-inverse': inverse,
        }
    );

	return (
		<div
			className={classes}
			{...extraProps}
		>
			{accordionHeader()}
            {sectionOpen && accordionContent()}
		</div>
	);
};

export default Accordion;