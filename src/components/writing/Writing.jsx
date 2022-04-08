import React from 'react';
import Project from '../cards/project/Project';

import './Writing.css';

const { writing } = require('../../lib/projects.json');

const Writing = ({ bgColor }) => (
    <div className="writing-container">
        <div className="writing-style">
            {writing.map(post => <Project key={post.id} {...post} backgroundColor={bgColor} color='white' />)}
        </div>
        <div className="writing-text-wrapper">
            <h1 className="white">Writing</h1>
            <p className="font-style white">
                I also enjoy teaching, and writing is the technology that made
                possible for us to share our knowledge since the beginning of the
                civiliations. Publishing what I know, in Portuguese, is the way
                I found to help those who want to learn about Coding Skills in Brazil
            </p>
        </div>
    </div>
);

export default Writing;
