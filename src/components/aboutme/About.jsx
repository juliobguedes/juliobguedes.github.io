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
            I am currently working in the E-Pol project in the Software Practices
            Laboratory at UFCG. While that, I am focusing myself in learning more
            about web development and data science.
        </p>
        <p>
            Besides that, I like to keep learning about design in Web Development
            and Data Visualization. Those are two of the things that I consider
            being of great importance: the way that the costumers see the product
            and the way that we see the data. The first one matters if we want our
            the users to keep using our products, and the second have a direct
            impact on the insights we have in the analysis of the data.
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
