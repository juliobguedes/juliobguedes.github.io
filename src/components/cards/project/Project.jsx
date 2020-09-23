// @flow

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Project.css';

type SkillProps = {
    title: string,
    description: string,
    repoUrl: string,
    liveUrl: string,
};

const Skill = ({
    title, description, repoUrl, liveUrl,
}: SkillProps) => (
    <div className="container">
        <div className="title-grid">
            <p className="fontSizeB">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </p>
            <a className="title-icon" href={repoUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" size={32} />
            </a>
        </div>
        <p className="fontSizeC">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                {description}
            </a>
        </p>
    </div>
);

export default Skill;
