import React from 'react';
import Skill from '../cards/skill/Skill';
import './Skills.css';

const sk = require('../../lib/skills.json');

const exampleSkills = sk.skills;

const Skills = () => (
    <>
        <div className="textStyle">
            <p>
                During my graduation in Computer Science, I have worked in
                a few projects: some of them for fun, and others for classes.
                Here they are:
            </p>
        </div>
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
    </>
);

export default Skills;
