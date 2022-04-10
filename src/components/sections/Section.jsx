import React from 'react';
import AppContext from '../app/AppContext';
import { Experience, Project } from '../common';
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

const CardSequence = ({ data, bgColor }) => (
    <div className="section-card-sequence">
        {data.map(ds => <Project key={ds.id} {...ds} backgroundColor={bgColor} />)}
    </div>
);

const ExperienceSequence = ({ data, bgColor }) => (
    <div className="section-card-sequence">
        {data.map(ds => <Experience key={ds.id} {...ds} backgroundColor={bgColor} />)}
    </div>
);

const List = ({ cardType, data, bgColor }) => {
    const SequenceComponent = cardType === "Experience" ? ExperienceSequence : CardSequence;
    return (
        <SequenceComponent data={data} bgColor={bgColor} />
    );
};

const LeftSection = ({ title, text, textColor, data, cardType, bgColor }) => (
    <AppContext.Consumer>
        {({ projects }) => (
            <div className="left-section-container">
                <HeaderAndText title={title} text={text} textColor={textColor} />
                <List cardType={cardType} data={projects[data]} bgColor={bgColor} />
            </div>
        )}
    </AppContext.Consumer>
);

const RightSection = ({ title, text, textColor, data, cardType, bgColor }) => (
    <AppContext.Consumer>
        {({ projects }) => (
            <div className="right-section-container">
                <List cardType={cardType} data={projects[data]} bgColor={bgColor} />
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
