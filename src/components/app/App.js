import React, { Component } from 'react';
import BigCard from '../cards/bigCard/BigCard';
import Intro from '../intro/Intro';
import About from '../aboutme/About';

import './App.css';

const cleanStyle = {
    clean: {
        fontWeight: '300',
        fontFamily: 'Roboto',
    },
};

const App = () => (
    <div style={cleanStyle.clean}>
        <BigCard Component={() => <Intro />} />
        <BigCard Component={() => <About />} color="#00a86b" />
        <BigCard Component={() => <div>hey</div>} color="#40e0d0" />
        <BigCard Component={() => <div>hey</div>} color="#ffbf00" />
        <BigCard Component={() => <div>hey</div>} color="#232e45" />
    </div>
);

export default App;
