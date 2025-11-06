import React from 'react';
import './Experience.css';

const Experience = ({
    title, lab, position, description, timePeriod, location,
}) => {
    const companyLinks = {
        'Inda.band': 'https://www.linkedin.com/company/indaband',
        'VTEX': 'https://www.linkedin.com/company/vtex/',
    };
    
    const link = companyLinks[title];
    const displayTitle = lab ? `${title} @ ${lab}` : title;
    const titleWithPosition = position ? `${position} · ${displayTitle}` : displayTitle;
    
    const parseDates = (timePeriod) => {
        if (!timePeriod) return { start: '', end: '' };
        const parts = timePeriod.split(' - ');
        if (parts.length === 2) {
            return { start: parts[0].trim(), end: parts[1].trim() };
        }
        return { start: timePeriod, end: '' };
    };

    const { start, end } = parseDates(timePeriod);

    const content = (
        <div className="experience-content">
            <div className="experience-date">
                {end && <div className="experience-date-end">{end}</div>}
                {start && <div className="experience-date-start">{start}</div>}
            </div>
            <div className="experience-details">
                <h2 className="experience-title">
                    <span className="experience-title-text">{titleWithPosition}</span>
                </h2>
                <div className="experience-meta">
                    {location && <span className="experience-location">{location}</span>}
                </div>
                <p className="experience-description">{description}</p>
            </div>
        </div>
    );
    
    if (link) {
        return (
            <article className="experience-container experience-hoverable">
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="experience-link-wrapper"
                    aria-label={`${displayTitle} - External link`}
                >
                    {content}
                </a>
            </article>
        );
    }
    
    return (
        <article className="experience-container">
            {content}
        </article>
    );
};

export default Experience;
