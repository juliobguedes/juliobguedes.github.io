import React from 'react';
import Skill from '../cards/skill/Skill';
import './Skills.css';
const sk = require('../../lib/skills.json');
const exampleSkills = sk.skills;

const Skills = () => (
    <>
        <div className="textStyle" bp="12@md 12@sm 12@xs">
            <p>During my graduation in Computer Science, I have worked in a few projects: some of them for fun, and others for classes. Here they are:</p>
        </div>
        {exampleSkills.map(
            skill => (
            <div bp="4@md 6@sm 12@xs" key={skill.id}>
                <Skill
                    name={skill.skName}
                    desc={skill.skDescription}
                    url={skill.url}
                    display={skill.urlDisplay}
                />
            </div>
        ))}
    </>
);

export default Skills;
