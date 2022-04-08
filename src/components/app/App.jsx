// @flow

import React from 'react';
import BigCard from '../cards/bigCard/BigCard';
import Intro from '../intro/Intro';
import About from '../aboutme/About';
import DataProjects from '../data_projects/DataProjects';
import WebProjects from '../web_projects/WebProjects';
import OpenSource from '../open_source/OpenSource';
import Writing from '../writing/Writing';
import Contact from '../contact/Contact';

import './App.css';

const colors = [
    '#fcab64',
    '#fcd29f',
    '#a1fcdf',
    '#7fd8be',
    '#424c55',
    '#342e37',
];

const sections = [
    About, DataProjects, WebProjects,
    OpenSource, Writing, Contact
];

window.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.keyCode === 80) {
        e.preventDefault();
    }
});

const App = () => (
    <div className="clean">
        <BigCard>
            <Intro />
        </BigCard>
        {sections.map((Section, i) => (
            <BigCard key={colors[i]} color={colors[i]}>
                <Section bgColor={colors[i]} />
            </BigCard>
        ))}
    </div>
);

export default App;
