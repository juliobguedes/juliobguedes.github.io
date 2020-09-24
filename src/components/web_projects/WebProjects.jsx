import React from 'react';
import Project from '../cards/project/Project';
import './WebProjects.css';

const { web } = require('../../lib/projects.json');

const WebProjects = () => (
    <div className="webproj-container">
        <div className="webproj-style">
            {web.map(wbProj => <Project key={wbProj.id} {...wbProj} />)}
        </div>
        <div className="webproj-text-wrapper">
            <h1>Web Projects</h1>
            <p className="font-style">
                Along the undergraduate course, I have developed a few projects
                by myself or with friends. Some of them have been developed
                during classes, others were just for fun and enjoying what we imagined.
            </p>
        </div>
    </div>
);

export default WebProjects;
