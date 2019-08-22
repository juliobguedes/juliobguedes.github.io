import React from 'react';
import Skill from '../cards/skill/Skill';
import './Skills.css';

const sk = require('../../lib/skills.json');

const exampleSkills = sk.skills;

const Skills = () => (
    <div className="skills-container">
        <div className="text-style">
            <p className="font-style">
                During my graduation in Computer Science, I have worked in
                a few projects: some of them for fun, and others for classes.
                Here they are:
            </p>
        </div>
        <div className="skills-style">
            {exampleSkills.map(
                skill => (
                    <Skill
                      key={skill.id}
                      name={skill.skName}
                      desc={skill.skDescription}
                      url={skill.url}
                      display={skill.urlDisplay}
                    />
                ),
            )}
        </div>
    </div>
);

export default Skills;
