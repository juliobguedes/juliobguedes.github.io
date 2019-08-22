import React from 'react';
import profileImage from '../../../assets/img/profile.jpg';

import './About.css';

const AboutText = () => (
    <div className="font-size-c">
        <p>
            I am a brazilian developer and undergraduate student in Computer
            Science at the Federal University of Campina Grande (UFCG), currently
            on the sixth semester.
        </p>
        <p>
            I am currently working in the Computational Perception Laboratory (LPC) @ UFCG,
            under advisement of professors Herman Martins and Eanes Torres, in a project using
            React Native and Node.js.
        </p>
        <p>
            I also like to keep myself learning what I can, improving existing skills and
            always challenging myself. I also like to participate in coding competitions with
            my friends, watch a lot of movies and series and read.
        </p>
    </div>
);

const About = () => (
    <div className="about-container">
        <div className="image-container">
            <img className="image-wrapper" alt="Me, Júlio" src={profileImage} />
        </div>
        <div className="text-container">
            <AboutText />
        </div>
    </div>
);

export default About;
