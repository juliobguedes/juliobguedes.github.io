import React from 'react';
import AppContext from '../app/AppContext';
import Project from '../cards/project/Project';
import './Section.css';

const HeaderAndText = ({ title, text, textColor }) => {
    const cname = `section-text-wrapper text-${textColor}`
    return (
        <div className={cname}>
            <h1>{title}</h1>
            <p className="section-font-style">
                {text}
            </p>
        </div>
    );
};

const CardSequence = ({ cardData, bgColor }) => (
    <div className="section-card-sequence">
        {cardData.map(ds => <Project key={ds.id} {...ds} backgroundColor={bgColor} />)}
    </div>
);

const LeftSection = ({ title, text, textColor, cardData, bgColor }) => (
    <AppContext.Consumer>
        {({ projects }) => (
            <div className="left-section-container">
                <HeaderAndText title={title} text={text} textColor={textColor} />
                <CardSequence cardData={projects[cardData]} bgColor={bgColor} />
            </div>
        )}
    </AppContext.Consumer>
);

const RightSection = ({ title, text, textColor, cardData, bgColor }) => (
    <AppContext.Consumer>
        {({ projects }) => (
            <div className="right-section-container">
                <CardSequence cardData={projects[cardData]} bgColor={bgColor} />
                <HeaderAndText title={title} text={text} textColor={textColor} />
            </div>
        )}
    </AppContext.Consumer>
);

const Section = ({ left, ...props }) => {
    const Component = left ? LeftSection : RightSection;
    return (
        <Component {...props} />
    );
};

export default Section;
