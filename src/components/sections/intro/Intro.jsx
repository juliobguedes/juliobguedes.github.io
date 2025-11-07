// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import MainScreenContext from '../../mainScreen/MainScreenContext';
import { ContactCard } from '../../common';
import { translations } from '../../../lib';
import './Intro.css';

const BoldName = () => <span> Júlio Guedes</span>;

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

const ContactIcons = () => (
    <MainScreenContext.Consumer>
        {({ contacts }) => (
            <div className="intro-contact-icons">
                {contacts.map(c => <ContactCard key={c.social} contact={c} />)}
            </div>
        )}
    </MainScreenContext.Consumer>
);

const Intro = () => (
    <MainScreenContext.Consumer>
        {({ lang }) => (
            <header className="text-center proper-center">
                <P1 lang={lang} />
                <P2 lang={lang} />
                <ContactIcons />
            </header>
        )}
    </MainScreenContext.Consumer>
);

export default Intro;
