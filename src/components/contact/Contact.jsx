import React from 'react';
import ContactCard from '../cards/contact/ContactCard';

import contact from '../../lib/contacts.json';
import './Contact.css';

const Contact = () => (
    <div className="contact-container">
        <div className="contact-text-wrapper">
            <h1 className="white">Contacts</h1>
            <p className="font-style white">
                You can find me in the internet as @juliobguedes.
                Feel free to reach out :)
            </p>
        </div>
        <div className="contact-style">
            {contact.map(c => <ContactCard key={c.social} contact={c} />)}
        </div>
    </div>
);

export default Contact;
