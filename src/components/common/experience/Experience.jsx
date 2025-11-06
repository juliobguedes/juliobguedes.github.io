import React from 'react';
import './Experience.css';

const SubHeader = ({ position, location, timePeriod }) => {
    const SH = position ? () => (
        <ul className="experience-subheader">
            <li className="experience-position">{position}</li>
            <li className="experience-location">{timePeriod}</li>
            <li className="experience-time">{location}</li>
        </ul>
    ) : () => (
        <ul className="experience-subheader">
            <li className="experience-location">{timePeriod}</li>
            <li className="experience-time">{location}</li>
        </ul>
    );
    return <SH />;
};

const renderTitleWithLink = (title, lab) => {
    const companyLinks = {
        'Inda.band': 'https://www.linkedin.com/company/indaband',
        'VTEX': 'https://www.linkedin.com/company/vtex/',
    };
    
    const link = companyLinks[title];
    const displayTitle = lab ? `${title} @ ${lab}` : title;
    
    if (link) {
        return (
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="experience-title-link"
            >
                {displayTitle}
            </a>
        );
    }
    
    return <span>{displayTitle}</span>;
};

const Experience = ({
    title, lab, position, description, timePeriod, location,
}) => (
    <article className="experience-container">
        <h2 className="experience-title">{renderTitleWithLink(title, lab)}</h2>
        <SubHeader position={position} location={location} timePeriod={timePeriod} />
        <p className="experience-text-justify">{description}</p>
    </article>
);

export default Experience;
