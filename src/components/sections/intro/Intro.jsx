// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import MainScreenContext from '../../mainScreen/MainScreenContext';
import './Intro.css';

const textMapping = {
    s1: { en: 'Hello there!', pt: 'E aí!' },
    s2: { en: 'My name is', pt: 'Me chamo' },
    s3: {
        en: `This page is my public portfolio, and here you will discover \
        a few things about me and about what I have been working with.`,
        pt: `Esta página é meu portfólio público, e aqui você pode descobrir \
        algumas coisas sobre mim e com o que tenho trabalhado.`
    },
    s4: {
        en: `Please press CTRL+P or click on the link to open my `,
        pt: `Aperte CTRL+P ou clique no link para abrir meu `
    },
    s5: {
        en: 'Feel free to reach out anytime :)',
        pt: 'Sinta-se à vontade para entrar em contato :)'
    },
    cl1: {
        en: 'Meu portfólio também possui uma ',
        pt: 'My portfolio also has an ',
    },
    cl2: {
        en: 'versão em Português',
        pt: 'english version'
    },
    cl3: {
        en: '/pt',
        pt: '/'
    }
};

const BoldName = () => <b> Júlio Guedes</b>;

const P1 = ({ lang }) => (
    <div className="fontSizeA">
        <p className="amatic">{textMapping.s1[lang]}</p>
        <p>
            {textMapping.s2[lang]}
            <BoldName />
        </p>
    </div>
);

const P2 = ({ lang }) => (
    <div className="fontSizeB">
        <p>{textMapping.s3[lang]}</p>
        <p>{textMapping.s4[lang]}<a href="./JulioGuedes_Current.pdf" target="_blank">resumé</a>.</p>
        <p>
            {textMapping.cl1[lang]}
            <Link to={textMapping.cl3[lang]}>{textMapping.cl2[lang]}</Link>.
        </p>
        <p>{textMapping.s5[lang]}</p>
    </div>
);

const Intro = () => (
    <MainScreenContext.Consumer>
        {({ lang }) => (
            <div className="text-center proper-center">
                <P1 lang={lang} />
                <P2 lang={lang} />
            </div>
        )}
    </MainScreenContext.Consumer>
);

export default Intro;
