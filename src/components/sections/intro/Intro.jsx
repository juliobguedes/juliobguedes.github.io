// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import MainScreenContext from '../../mainScreen/MainScreenContext';
import { translations } from '../../../lib';
import './Intro.css';

const BoldName = () => <b> Júlio Guedes</b>;

const P1 = ({ lang }) => {
    const t = translations[lang].intro;
    return (
        <div className="fontSizeA">
            <p className="amatic">{t.s1}</p>
            <p>
                {t.s2}
                <BoldName />
            </p>
        </div>
    );
};

const P2 = ({ lang }) => {
    const t = translations[lang].intro;
    return (
        <div className="fontSizeB">
            <p>{t.s3}</p>
            <p>{t.s4} <a href="./JulioGuedes_Current.pdf" target="_blank">{t.resume}</a>.</p>
            <p>
                {t.cl1} <Link to={t.cl3}>{t.cl2}</Link>.
            </p>
            <p>{t.s5}</p>
        </div>
    );
};

const Intro = () => (
    <MainScreenContext.Consumer>
        {({ lang }) => (
            <header className="text-center proper-center">
                <P1 lang={lang} />
                <P2 lang={lang} />
            </header>
        )}
    </MainScreenContext.Consumer>
);

export default Intro;
