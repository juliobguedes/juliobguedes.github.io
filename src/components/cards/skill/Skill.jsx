// @flow

import React from 'react';
import gitIcon from '../../../../assets/img/GitHub-Mark-32px.png';
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
                <img src={gitIcon} className="center" alt="Github Repository" />
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
