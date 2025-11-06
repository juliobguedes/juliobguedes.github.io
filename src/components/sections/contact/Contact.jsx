import React from 'react';
import MainScreenContext from '../../mainScreen/MainScreenContext';
import { ContactCard } from '../../common';
import { translations } from '../../../lib';

import './Contact.css';

const Contact = () => (
    <MainScreenContext.Consumer>
        {({ contacts, lang }) => {
            const t = translations[lang].contact;
            return (
                <address className="contact-container">
                    <div className="contact-text-wrapper">
                        <h1 className="white">{t.title}</h1>
                        <p className="font-style white">
                            {t.body}
                        </p>
                    </div>
                    <div className="contact-style">
                        {contacts.map(c => <ContactCard key={c.social} contact={c} />)}
                    </div>
                </address>
            );
        }}
    </MainScreenContext.Consumer>
);

export default Contact;
