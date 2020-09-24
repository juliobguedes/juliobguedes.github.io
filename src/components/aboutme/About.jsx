import React from 'react';
import profileImage from '../../../assets/img/profile.jpg';

import './About.css';

const AboutText = () => (
    <div className="font-size-c">
        <p>
            I am a brazilian undergraduate student and Master&apos;s candidate
            in Computer Science at the Federal University of Campina Grande (UFCG).
            I am currently working with Natural Language Processing (NLP) in a
            project in partnership with Dell EMC, and researching in Recommender Systems.
        </p>
        <p>
            During my undergraduate course I have worked with both Web and Mobile development,
            using Angular.JS and React Native. I am now focusing in Data Analysis and
            Visualization, and Machine Learning with a special interest in Deep Learning topics.
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
