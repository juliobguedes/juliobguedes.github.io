import React from 'react';
import Project from '../cards/project/Project';
import './DataProjects.css';

const dsProjects = require('../../lib/projects.json').datascience;

const DataProjects = () => (
    <div className="dsproj-container">
        <div className="dsproj-text-wrapper">
            <h1>Data Science Projects</h1>
            <p className="font-style">
                Along the undergraduate course, I have developed a few projects
                by myself or with friends. Some of them have been developed
                during classes, others were just for fun and enjoying what we imagined.
            </p>
        </div>
        <div className="dsproj-style">
            {dsProjects.map(ds => <Project key={ds.id} {...ds} />)}
        </div>
    </div>
);

export default DataProjects;
