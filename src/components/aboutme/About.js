import React from 'react';

import SmallCard from '../cards/smallCard/SmallCard';
import profileImage from '../../../assets/img/profile.jpg';

import './About.css';

const About = () => (
    <>
        <div className="image-wrapper" bp="5 offset-2">
            <img src={profileImage} />
        </div>
        <div bp="3">
            <SmallCard Component={() => <div>hey</div>} />
        </div>
    </>
);

export default About;
