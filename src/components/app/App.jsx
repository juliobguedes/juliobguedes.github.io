// @flow

import React from 'react';
import BigCard from '../cards/bigCard/BigCard';
import Intro from '../intro/Intro';
import About from '../aboutme/About';
import Skills from '../skills/Skills';

import './App.css';

const App = () => (
    <div className="clean">
        <BigCard>
            <Intro />
        </BigCard>
        <BigCard color="#00a86b">
            <About />
        </BigCard>
        <BigCard color="#40e0d0">
            <Skills />
        </BigCard>
    </div>
);

export default App;
