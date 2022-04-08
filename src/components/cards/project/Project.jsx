// @flow

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './Project.css';

type SkillProps = {
    title: string,
    description: string,
    repoUrl: string,
    liveUrl: string,
    backgroundColor: string,
    color?: string,
};

type GHIconProps = {
    repoUrl: string,
};

const GHIcon = ({ repoUrl }: GHIconProps) => (
    <a className="title-icon" href={repoUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" size={32} />
    </a>
);

const highlightStyle = (isHighlighted, bgColor, color) => ( isHighlighted ? {
    color: color,
    background: 'white',
    backgroundSize: '200% 100%',
    backgroundPosition: 'left',
    background: `linear-gradient(to left, white 50%, ${bgColor} 50%)`,
    transition: 'all 1s ease',
} : {
    background: 'white',
    backgroundSize: '200% 100%',
    backgroundPosition: 'right',
    background: `linear-gradient(to left, white 50%, ${bgColor} 50%)`,
    transition: 'all 1s ease',
});

const Skill = ({
    title, description, repoUrl, liveUrl, backgroundColor, color,
}: SkillProps) => {
    const [isHighlighted, setHighlighted] = useState(false);
    const titleClass = repoUrl ? 'title-grid' : 'title-only';
    const principalUrl = liveUrl != null ? liveUrl : repoUrl;
    const textColor = color ? color : 'black';
    return (
        <div
          className="container"
          onMouseEnter={() => setHighlighted(true)}
          onMouseLeave={() => setHighlighted(false)}
        >
            <div className={titleClass}>
                <p className="fontSizeB">
                    <a href={principalUrl} target="_blank" rel="noopener noreferrer">
                        <span style={highlightStyle(isHighlighted, backgroundColor, textColor)}>
                            {title}
                        </span>
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
