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

const Experience = ({
    title, lab, position, description, timePeriod, location,
}) => (
    <div className="experience-container">
        <p className="experience-title">{lab ? `${title} @ ${lab}` : `${title}`}</p>
        <SubHeader position={position} location={location} timePeriod={timePeriod} />
        <p className="experience-text-justify">{description}</p>
    </div>
);

export default Experience;
