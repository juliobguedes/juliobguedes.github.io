import React from 'react';
import Project from '../cards/project/Project';

import './Writing.css';

const { writing } = require('../../lib/projects.json');

const Writing = () => (
    <div className="writing-container">
        <div className="writing-style">
            {writing.map(post => <Project key={post.id} {...post} />)}
        </div>
        <div className="writing-text-wrapper">
            <h1 className="white">Writing</h1>
            <p className="font-style white">
                Along the undergraduate course, I have developed a few projects
                by myself or with friends. Some of them have been developed
                during classes, others were just for fun and enjoying what we imagined.
            </p>
        </div>
    </div>
);

export default Writing;
