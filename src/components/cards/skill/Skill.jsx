// @flow

import React from 'react';
import gitIcon from '../../../../assets/img/GitHub-Mark-32px.png';
import gitLightIcon from '../../../../assets/img/GitHub-Mark-Light-32px.png';
import './Skill.css';

type SkillProps = {
    name: string,
    desc: string,
    repoUrl: string,
    liveUrl: string,
    imgDisplay: string,
};

const Skill = ({
    name, desc, repoUrl, liveUrl, imgDisplay,
}: SkillProps) => (
    <div className="container">
        <p className="text-center textStyle">{name}</p>
        <p className="text-center textStyle desc">{desc}</p>
        <a href={repoUrl}>
            <img src={gitIcon} className="center" alt="Github Repository" />
        </a>
        <a href={liveUrl}>
            <img src={imgDisplay || gitLightIcon} className="imgSize" alt="Repository Live" />
        </a>
    </div>
);

export default Skill;
