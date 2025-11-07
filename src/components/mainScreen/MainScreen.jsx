import React from 'react';
import { useLocation } from 'react-router-dom';

import MainScreenContext from './MainScreenContext';
import { BigCard, Footer } from '../common';
import { Intro } from '../sections';
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
    const lang = useLocation().pathname === '/' ? 'en' : 'pt';
    const languageSections = sections[lang];
    const sectionNames = Object.keys(languageSections);
    return (
        <MainScreenContext.Provider value={{ contacts, projects: projects[lang], lang }}>
            <main className='clean' role="main">
                <section aria-label="Introduction">
                    <BigCard>
                        <Intro />
                    </BigCard>
                </section>
                {sectionNames.map((name, i) => (
                    <section key={name} aria-label={languageSections[name].title}>
                        <BigCard key={colors[i]} color={colors[i + 1]}>
                            <Section
                                key={colors[i + 1]}
                                left={(i + 1) % 2 == 1}
                                bgColor={colors[i + 1]}
                                {...languageSections[name]}
                            />
                        </BigCard>
                    </section>
                ))}
            </main>
            <Footer />
        </MainScreenContext.Provider>
    );
};

export default MainScreen;
