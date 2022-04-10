// @flow
import React from 'react';
import './Intro.css';

const BoldName = () => <b> Júlio Guedes</b>;

const Intro = () => (
    <div className="text-center proper-center">
        <div className="fontSizeA">
            <p className="amatic">Hello there!</p>
            <p>
                My name is
                <BoldName />
            </p>
        </div>
        <div className="fontSizeB">
            <p>
                This page is my public portfolio, and here you will discover
                a few things about me and about what I have been working with.
            </p>
        </div>
        <div className="fontSizeB">
            <p>Please press CTRL+P or click on the link to open my <a href="./JulioGuedes_Current.pdf" target="_blank">resumé</a>.</p>
            <p>Feel free to reach out anytime :)</p>
        </div>
    </div>
);

export default Intro;
