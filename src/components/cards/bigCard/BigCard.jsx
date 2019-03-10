// @flow

import * as React from 'react';
import './BigCard.css';

const styles = bgColor => ({
    background: {
        backgroundColor: bgColor || 'white',
    },
});

type BigCardProps = {
    Component: React.Component,
    color: string,
};

const BigCard = ({ Component, color }: BigCardProps) => (
    <div style={styles(color).background} className="bigCardContainer">
        <Component />
    </div>
);

export default BigCard;
