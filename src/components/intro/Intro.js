/* @flow */

import React from 'react';

const styles = {
    fontSizeA: {
        fontSize: '2.25em',
    },
    fontSizeB: {
        fontSize: '1.75em',
    },
    fontSizeC: {
        fontSize: '1.25em',
    },
};

const Intro = () => (
    <div bp="8 offset-3 text-center">
        <div style={styles.fontSizeA}>
            <p>Hello there!</p>
            <p>My name is <b>Júlio Guedes</b></p>
        </div>
        <div style={styles.fontSizeB}>
            <p>This page is a simple portfolio, and here you will discover
                a few things about me and about what I have been working with.
            </p>
        </div>
        <div style={styles.fontSizeC}>
            <p>I truly hope you enjoy it!</p>
        </div>
    </div>
);

export default Intro;
