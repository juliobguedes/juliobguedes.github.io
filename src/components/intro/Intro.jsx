// @flow
import React from 'react';
import './Intro.css';

const BoldName = () => <b> Júlio Guedes</b>;

const Intro = () => (
    <div className="text-center">
        <div className="fontSizeA">
            <p>Hello there!</p>
            <p>
                My name is
                <BoldName />
            </p>
        </div>
        <div className="fontSizeB">
            <p>
                This page is a simple portfolio, and here you will discover
                a few things about me and about what I have been working with.
            </p>
        </div>
        <div className="fontSizeC">
            <p>I truly hope you enjoy it!</p>
        </div>
    </div>
);

export default Intro;
