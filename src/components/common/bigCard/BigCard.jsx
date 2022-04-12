// @flow

import React from 'react';
import type { Node } from 'react';
import './BigCard.css';

const styles = bgColor => ({
    background: {
        backgroundColor: bgColor || 'white',
    },
});

type BigCardProps = {
    children: Node,
    color: string,
};

const BigCard = ({ children, color }: BigCardProps) => (
    <div style={styles(color).background} className="bigCardContainer">
        {children}
    </div>
);

export default BigCard;
