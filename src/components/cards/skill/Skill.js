/* @flow */

import React from 'react';
import './Skill.css';

const styles = {
    textStyle: {
        textAlign: 'center',
        fontSize: '1.25em',
    },
};

const Skill = ({ name, desc }) => (
    <div className="container">
        <p className="text-center" style={styles.textStyle}>{name}</p>
        <p className="text-center" style={styles.textStyle}>{desc}</p>
    </div>
);

export default Skill;
