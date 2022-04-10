import React from 'react';
import AppContext from '../../app/AppContext';
import ContactCard from '../../cards/contact/ContactCard';

import './Contact.css';

const Contact = () => (
    <AppContext.Consumer>
        {({ contacts }) => (
            <div className="contact-container">
                <div className="contact-text-wrapper">
                    <h1 className="white">Contacts</h1>
                    <p className="font-style white">
                        {`You can find me on the internet as @juliobguedes.
                        Feel free to reach out :)`}
                    </p>
                </div>
                <div className="contact-style">
                    {contacts.map(c => <ContactCard key={c.social} contact={c} />)}
                </div>
            </div>
        )}
    </AppContext.Consumer>
);

export default Contact;
