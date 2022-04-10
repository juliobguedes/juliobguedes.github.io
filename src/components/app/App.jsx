// @flow

import React from 'react';
import AppContext from './AppContext';
import { BigCard } from '../common';

import {
    Intro, About, Contact
} from '../sections';
import Section from '../sections/Section';
import { contacts, projects, sections } from '../../lib';

import './App.css';

const colors = [
    '#fcab64',
    '#fcd29f',
    '#95d6f9',
    '#aaebff',
    '#a1fcdf',
    '#7fd8be',
    '#424c55',
    '#342e37',
];

const lastIndex = colors.length - 1;
const sectionNames = Object.keys(sections);

window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode === 80) {
        window.open('./JulioGuedes_Current.pdf')
        e.preventDefault();
    }
});

const App = () => (
    <AppContext.Provider value={{ contacts, projects }}>
        <div className='clean'>
            <BigCard>
                <Intro />
            </BigCard>
            <BigCard key={colors[0]} color={colors[0]}>
                <About bgColor={colors[0]} />
            </BigCard>
            {sectionNames.map((name, i) => (
                <BigCard key={colors[i+1]} color={colors[i+1]}>
                    <Section
                      key={colors[i+1]}
                      left={(i+1) % 2 == 1}
                      bgColor={colors[i+1]}
                      {...sections[name]}
                    />
                </BigCard>
            ))}
            <BigCard key={colors[lastIndex]} color={colors[lastIndex]}>
                <Contact bgColor={colors[lastIndex]} />
            </BigCard>
        </div>
    </AppContext.Provider>
);

export default App;
