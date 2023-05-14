import React from 'react';
import { useLocation } from 'react-router-dom';

import MainScreenContext from './MainScreenContext';
import { BigCard } from '../common';
import { Intro, About, Contact } from '../sections';
import Section from '../sections/Section';

import './MainScreen.css';

const colors = [
    '#fcab64',
    '#fcd29f',
    '#95d6f9',
    '#aaebff',
    '#a1fcdf',
    '#7fd8be',
    "#61928A",
    '#424c55',
    '#342e37',
];

const MainScreen = ({ contacts, projects, sections }) => {
    const lastIndex = colors.length - 1;
    const lang = useLocation().pathname === '/' ? 'en' : 'pt';
    const languageSections = sections[lang];
    const sectionNames = Object.keys(languageSections);
    return (
        <MainScreenContext.Provider value={{ contacts, projects: projects[lang], lang }}>
            <div className='clean'>
                <BigCard>
                    <Intro />
                </BigCard>
                <BigCard key={colors[0]} color={colors[0]}>
                    <About bgColor={colors[0]} />
                </BigCard>
                {sectionNames.map((name, i) => (
                    <BigCard key={colors[i + 1]} color={colors[i + 1]}>
                        <Section
                            key={colors[i + 1]}
                            left={(i + 1) % 2 == 1}
                            bgColor={colors[i + 1]}
                            {...languageSections[name]}
                        />
                    </BigCard>
                ))}
                <BigCard key={colors[lastIndex]} color={colors[lastIndex]}>
                    <Contact bgColor={colors[lastIndex]} />
                </BigCard>
            </div>
        </MainScreenContext.Provider>
    );
};

export default MainScreen;
