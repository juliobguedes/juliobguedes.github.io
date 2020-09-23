// @flow

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Skill.css';

type SkillProps = {
    name: string,
    desc: string,
    repoUrl: string,
    liveUrl: string,
};

const Skill = ({
    name: title, desc, repoUrl, liveUrl,
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
                {desc}
            </a>
        </p>
    </div>
);

export default Skill;
