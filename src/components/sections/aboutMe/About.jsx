import React from 'react';
import MainScreenContext from '../../mainScreen/MainScreenContext';
import { translations } from '../../../lib';
import profileImage from '../../../../assets/img/profile.jpg';

import './About.css';

const AboutText = ({ lang }) => {
    const t = translations[lang].about;

    // Helper function to render text with links
    const renderWithLinks = (text) => {
        const parts = text.split(/(Indaband|VTEX)/);
        return parts.map((part, index) => {
            if (part === 'Indaband') {
                return (
                    <a
                        key={index}
                        href="https://www.linkedin.com/company/indaband"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {part}
                    </a>
                );
            }
            if (part === 'VTEX') {
                return (
                    <a
                        key={index}
                        href="https://www.linkedin.com/company/vtex/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div className="font-size-c">
            <p>{t.p1}</p>
            <p>{renderWithLinks(t.p2)}</p>
        </div>
    );
};

const About = () => (
    <MainScreenContext.Consumer>
        {({ lang }) => {
            const t = translations[lang].about;
            return (
                <article className="about-container">
                    <div className="image-container">
                        <img className="image-wrapper" alt="Júlio Barreto Guedes - Software Engineer II at VTEX" src={profileImage} />
                    </div>
                    <div className="text-container">
                        <h1 className="about-title">{t.title}</h1>
                        <AboutText lang={lang} />
                    </div>
                </article>
            );
        }}
    </MainScreenContext.Consumer>
);

export default About;
