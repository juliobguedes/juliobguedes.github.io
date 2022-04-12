import React from 'react';
import MainScreenContext from '../../mainScreen/MainScreenContext';
import profileImage from '../../../../assets/img/profile.jpg';

import './About.css';

const text = {
    title: {
        en: 'About Me',
        pt: 'Sobre mim'
    },
    p1: {
        en: `I am a brazilian Master's candidate in Computer Science \
        at the Federal University of Campina Grande (UFCG), currently \
        researching about Recommender Systems.`,
        pt: `Mestrando em Ciência da Computação pela Universidade Federal \
        de Campina Grande (UFCG), atualmente pesquisando sobre Sistemas de \
        Recomendação.`
    },
    p2: {
        en: `In the past I worked with both Web and Mobile development, using frameworks \
        like Angular and React. I am now working in Data-related projects, focusing \
        in Data Analysis and Visualization, and Machine Learning with a special \
        interest in Natural Language Processing and Deep Learning topics.`,
        pt: `No passado, trabalhei com desenvolvimento Web e Mobile, utilizando \
        frameworks como Angular e React. Agora trabalho com projetos focados em dados, \
        especialmente com Análise e Visualização de Dados, e Aprendizagem de Máquina \
        com um interesse especial em Processamento de Linguagem Natural e Aprendizagem \
        Profunda.`
    },
}

const AboutText = ({ lang }) => (
    <div className="font-size-c">
        <p>{text.p1[lang]}</p>
        <p>{text.p2[lang]}</p>
    </div>
);

const About = () => (
    <MainScreenContext.Consumer>
        {({ lang }) => (
            <div className="about-container">
                <div className="image-container">
                    <img className="image-wrapper" alt="Me, Júlio" src={profileImage} />
                </div>
                <div className="text-container">
                    <h1 className="about-title">{text.title[lang]}</h1>
                    <AboutText lang={lang} />
                </div>
            </div>
        )}
    </MainScreenContext.Consumer>
);

export default About;
