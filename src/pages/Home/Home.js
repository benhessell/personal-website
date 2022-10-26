import React from 'react';

import WelcomeBanner from '../../components/WelcomeBanner';


export default function Home() {

    const revealSection = () => {
        var reveals = document.querySelectorAll('.home-page_content-section');

        for( var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 200;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('home-page_content-section-active');
            } else {
                reveals[i].classList.remove('home-page_content-section-active')
            }
        }
    };
    window.addEventListener('scroll', revealSection);




    return (
        <div className="home-page">
            <WelcomeBanner />
                

            <div className="home-page_content">
                <div className="home-page_about-me home-page_content-section">
                    <h3 className="home-page_content-header">About me</h3>
                    <div className="home-page_about-me-container home-page_content-container">
                        <div className="home-page_about-me-pic home-page_content-box home-page_content-box-pic">
                            <img className="home-page_image-portrait home-page_image" src="../../images/profile-pic.jpg" alt="Me Professional Portrait" />
                        </div>
                        <div className="home-page_about-me-content home-page_content-box home-page_content-box-text">
                            <p className="home-page_content-box-para">
                                Hi, I'm Ben, a full stack engineering currently working for M&G plc. I have a passion for solving difficult problems. This led me to completing a Masters degree in <span className="home-page_content-box-span">Physics</span> and subsequently into a career as a full-stack software developer, predominately working with <span className="home-page_content-box-span">TypeScript/React</span> and <span className="home-page_content-box-span">Spring-Boot/Java</span>. Since graduating, I have worked as a cloud and web developer within a variety of teams, each with a varied tech stack and core deliverables, allowing me to develop a strong technical acumen and understanding of delivering high quality technical features and applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="home-page_employment home-page_content-section">
                    <h3 className="home-page_content-header">Employment</h3>
                    <div className="home-page_employment-container home-page_content-container">
                        <div className="home-page_employment-content home-page_content-box home-page_content-box-text">
                            <p className="home-page_content-box-para">
                                Since graduating from university, I have worked in various Engineering roles to produce high quality cloud and web-based deliverables for customers. I was given a high degree of responsibility allowing me to become proficient in various languages and technologies including React, C# and Java. I have acquired a strong understanding of the <span className="home-page_content-box-span">software lifecycle</span>, including architectural design, testing, development, CI/CD and agile working. I am always on the lookout for exciting new projects, I wish for work that can challenge me and allow me to learn new disciplines while being creative and innovative.
                            </p>
                        </div>
                        <div className="home-page_employment-pic home-page_content-box home-page_content-box-pic">
                            <img className="home-page_image-logo home-page_image" src="../../images/mandg-pic.png" alt="MandG plc logo" />
                        </div>
                    </div>
                </div>

                <div className="home-page_interests home-page_content-section">
                    <h3 className="home-page_content-header">Interests</h3>
                    <div className="home-page_interests-container home-page_content-container">
                        <div className="home-page_interests-pic home-page_content-box home-page_content-box-pic">
                            <img className="home-page_image-skye home-page_image" src="../../images/skye-pic.jpg" alt="Me and Skye Portrait" />
                        </div>
                        <div className="home-page_interests-content home-page_content-box home-page_content-box-text">
                            <p className="home-page_content-box-para">
                                Outside of work I enjoy undertaking my own smaller tech projects, some of which are described on this site. I also enjoy expanding my knowledge, which has led me to complete various <span className="home-page_content-box-span">certificates</span> including Azure Fundamentals, Azure Data Fundamentals and Oracle Java SE 8 Programmer Certifacte. Additionally, I have a strong love for sport, in particular, football. I was captain of my university team and continue to play with a local Edinburgh based team. Out with sports, I love to travel and spend time with my dogs, Skye (pictured) and Fergus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}