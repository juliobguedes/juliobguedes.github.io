import React from 'react';
import Project from '../../cards/project/Project';
import './OpenSource.css';

const { opensource } = require('../../../lib/projects.json');

const OpenSource = ({ bgColor }) => (
    <div className="osproj-container">
        <div className="osproj-text-wrapper">
            <h1>Open Source</h1>
            <p className="font-style">
                {``}
                <a href="https://opendevufcg.org" rel="noopener noreferrer" target="_blank">
                    OpenDevUFCG
                </a>
                . 
            </p>
        </div>
        <div className="osproj-style">
            <Project {...opensource.hacktoberfest} backgroundColor={bgColor} />
            <Project {...opensource.andromedev} backgroundColor={bgColor} />
        </div>
    </div>
);

export default OpenSource;
