import React from 'react';
import profileImage from '../../../../assets/img/profile.jpg';

import './About.css';

const AboutText = () => (
    <div className="font-size-c">
        <p>
            I am a brazilian Master&apos;s candidate in Computer Science
            at the Federal University of Campina Grande (UFCG), currently
            researching about Recommender Systems.
        </p>
        <p>
            In the past I worked with both Web and Mobile development, using frameworks
            like Angular and React. I am now working in Data-related projects, focusing
            in Data Analysis and Visualization, and Machine Learning with a special
            interest in Natural Language Processing and Deep Learning topics.
        </p>
    </div>
);

const About = () => (
    <div className="about-container">
        <div className="image-container">
            <img className="image-wrapper" alt="Me, Júlio" src={profileImage} />
        </div>
        <div className="text-container">
            <h1 className="about-title">About Me</h1>
            <AboutText />
        </div>
    </div>
);

export default About;
