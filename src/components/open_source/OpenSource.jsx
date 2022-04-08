import React from 'react';
import OpenDevCard from '../cards/opendevCard/OpenDevCard';
import Project from '../cards/project/Project';
import './OpenSource.css';

const { opensource } = require('../../lib/projects.json');

const OpenSource = ({ bgColor }) => (
    <div className="osproj-container">
        <div className="osproj-text-wrapper">
            <h1>Open Source</h1>
            <p className="font-style">
                {`I am an Open Source enthusiast and usually trying to convince
                someone to contribute to open source projects. With that feeling,
                me and my friends at UFCG started an organization for Open Source
                development inside the university: the `}
                <a href="https://opendevufcg.org" rel="noopener noreferrer" target="_blank">
                    OpenDevUFCG
                </a>
                . The organization is now a reference within the University community,
                and we are always trying to innovate and impact with our events. Be
                welcome to check out our pages :)
            </p>
        </div>
        <div className="osproj-style">
            <Project {...opensource.hacktoberfest} backgroundColor={bgColor} />
            <Project {...opensource.andromedev} backgroundColor={bgColor} />
        </div>
    </div>
);

export default OpenSource;
