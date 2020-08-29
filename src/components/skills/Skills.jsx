import React from 'react';
import Skill from '../cards/skill/Skill';
import './Skills.css';

const sk = require('../../lib/skills.json');

const exampleSkills = sk.skills;

const Skills = () => (
    <div className="skills-container">
        <div className="text-wrapper">
            <h1>Projects</h1>
            <p className="font-style">
                Along the undergraduate course, I have developed a few projects
                by myself or with friends. Some of them have been developed
                during classes, others were just for fun and enjoying what we imagined.
            </p>
        </div>
        <div className="skills-style">
            {exampleSkills.map(
                skill => (
                    <Skill
                      key={skill.id}
                      name={skill.skName}
                      desc={skill.skDescription}
                      repoUrl={skill.url}
                      liveUrl={skill.urlDisplay}
                    />
                ),
            )}
        </div>
    </div>
);

export default Skills;
