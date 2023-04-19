import React from 'react';

import ProjectsBanner from '../../components/ProjectsBanner';
import Accordion from '../../core-components/Accordion';


export default function Projects() {




    return (
        <div className="projects-page">
            <ProjectsBanner />
                

            <div className="projects-page_content">
                <div className="projects-page_content-accordion">
                    <Accordion header="Project Name" content="Project content to come" inverse="true" />
                </div>
                <div className="projects-page_content-accordion">
                    <Accordion header="Project Name" content="Project content to come" inverse="true" />
                </div>
                <div className="projects-page_content-accordion">
                    <Accordion header="Project Name" content="Project content to come" inverse="true" />
                </div>
            </div>    


        </div>
    );
}