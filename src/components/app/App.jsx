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

// const currentColors = ['#00a86b', '#40e0d0', '#eeb868', '#d496a7', '#7b4b94'];
const pastelColors = [
    '#fcab64',
    '#fcd29f',
    '#a1fcdf',
    '#7fd8be',
    '#424c55',
    '#342e37',
];
const colors = pastelColors;

const App = () => (
    <div className="clean">
        <BigCard>
            <Intro />
        </BigCard>
        <BigCard color={colors[0]}>
            <About />
        </BigCard>
        <BigCard color={colors[1]}>
            <DataProjects />
        </BigCard>
        <BigCard color={colors[2]}>
            <WebProjects />
        </BigCard>
        <BigCard color={colors[3]}>
            <OpenSource />
        </BigCard>
        <BigCard color={colors[4]}>
            <Writing />
        </BigCard>
        <BigCard color={colors[5]}>
            <Contact />
        </BigCard>
    </div>
);

export default App;
