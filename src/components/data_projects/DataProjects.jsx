import React from 'react';
import Project from '../cards/project/Project';
import './DataProjects.css';

const { datascience } = require('../../lib/projects.json');

const DataProjects = () => (
    <div className="dsproj-container">
        <div className="dsproj-text-wrapper">
            <h1>Data Science Projects</h1>
            <p className="font-style">
                Since I started working with and learning about Data Science,
                I have been trying to learn more and more. In this section you
                are able to see some of my notebooks and visualizations. I have
                also participated in Kaggle Challenges.
            </p>
        </div>
        <div className="dsproj-style">
            {datascience.map(ds => <Project key={ds.id} {...ds} />)}
        </div>
    </div>
);

export default DataProjects;
