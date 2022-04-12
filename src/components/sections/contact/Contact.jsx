import React from 'react';
import MainScreenContext from '../../mainScreen/MainScreenContext';
import { ContactCard } from '../../common';

import './Contact.css';

const text = {
    title: {
        en: 'Contacts',
        pt: 'Contatos'
    },
    body: {
        en: `You can find me on the internet as @juliobguedes.\
        Feel free to reach out :)`,
        pt: `Você pode me encontrar pela internet como @juliobguedes.
        Sinta-se a vontade para entrar em contato :)`
    }
}

const Contact = () => (
    <MainScreenContext.Consumer>
        {({ contacts, lang }) => (
            <div className="contact-container">
                <div className="contact-text-wrapper">
                    <h1 className="white">{text.title[lang]}</h1>
                    <p className="font-style white">
                        {text.body[lang]}
                    </p>
                </div>
                <div className="contact-style">
                    {contacts.map(c => <ContactCard key={c.social} contact={c} />)}
                </div>
            </div>
        )}
    </MainScreenContext.Consumer>
);

export default Contact;
