import React from 'react';
import Project from '../cards/project/Project';
import './DataProjects.css';

const { datascience: dataScience } = require('../../lib/projects.json');

const DataProjects = ({ bgColor }) => (
    <div className="dsproj-container">
        <div className="dsproj-text-wrapper">
            <h1>Data-Related Projects</h1>
            <p className="font-style">
                Since I started working with and learning about Data Science,
                I have been trying to learn more and more. In this section you
                are able to check out my Data Science projects.
            </p>
        </div>
        <div className="dsproj-style">
            {dataScience.map(ds => <Project key={ds.id} {...ds} backgroundColor={bgColor} />)}
        </div>
    </div>
);

export default DataProjects;
