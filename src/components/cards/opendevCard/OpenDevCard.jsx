// @flow

import React from 'react';
import './OpenDevCard.css';
import opendevImg from '../../../../assets/img/opendevufcg.png';

type SkillProps = {
    description: string,
    liveUrl: string,
};

const logoAlt = `OpenDevUFCG Logo. A diamond-shaped polygon with the left
    side being light-blue colored and the right side being dark-blue colored.`;

const Skill = ({ description, liveUrl }: SkillProps) => (
    <div className="opendev-container">
        <div className="opendev-logo-area">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <img className="opendev-logo-img" src={opendevImg} alt={logoAlt} />
            </a>
        </div>
        <div className="opendev-description">
            <p className="fontSizeC">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    {description}
                </a>
            </p>
        </div>
    </div>
);

export default Skill;
