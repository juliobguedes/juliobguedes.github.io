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

type GHIconProps = {
    repoUrl: String,
};

const GHIcon = ({ repoUrl }: GHIconProps) => (
    <a className="title-icon" href={repoUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" size={32} />
    </a>
);

const Skill = ({
    title, description, repoUrl, liveUrl,
}: SkillProps) => {
    const titleClass = repoUrl ? 'title-grid' : 'title-only';
    const principalUrl = liveUrl != null ? liveUrl : repoUrl;
    return (
        <div className="container">
            <div className={titleClass}>
                <p className="fontSizeB">
                    <a href={principalUrl} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </p>
                { repoUrl ? <GHIcon repoUrl={repoUrl} /> : null }
            </div>
            <p className="fontSizeC">
                <a href={principalUrl} target="_blank" rel="noopener noreferrer">
                    {description}
                </a>
            </p>
        </div>
    );
};

export default Skill;
