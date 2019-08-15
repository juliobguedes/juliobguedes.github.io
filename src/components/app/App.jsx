// @flow

import React from 'react';
import BigCard from '../cards/bigCard/BigCard';
import Intro from '../intro/Intro';
import About from '../aboutme/About';
import Skills from '../skills/Skills';

import './App.css';

const cleanStyle = {
    clean: {
        fontWeight: '300',
        fontFamily: 'Roboto',
    },
};

const App = () => (
    <div style={cleanStyle.clean}>
        <BigCard>
            <Intro />
        </BigCard>
        <BigCard color="#00a86b">
            <About />
        </BigCard>
        <BigCard color="#40e0d0">
            <Skills />
        </BigCard>
        <BigCard color="#ffbf00" />
        <BigCard color="#232e45" />
    </div>
);

export default App;
