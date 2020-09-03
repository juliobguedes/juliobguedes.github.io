// @flow

import React from 'react';
import {
    FaLinkedinIn, FaGithub, FaTwitter,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import './ContactCard.css';

const social2Component = {
    twitter: FaTwitter,
    github: FaGithub,
    linkedin: FaLinkedinIn,
    email: AiOutlineMail,
};

type ContactProps = {
    contact: {
        social: string,
        url: string,
    },
};

const ContactCard = ({ contact }: ContactProps) => {
    const Icon = social2Component[contact.social];
    return (
        <a
          className={`contact-card-container ${contact.social}`}
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
        >
            <Icon className="icon" size={32} />
        </a>
    );
};

export default ContactCard;
