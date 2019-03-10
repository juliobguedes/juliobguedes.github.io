// @flow
import * as React from 'react';

const styles = bgColor => ({
    background: {
        backgroundColor: bgColor || 'inherit',
        height: '90vh',
        borderRadius: '1.5px',
    },
});

type SmallCardProps = {
    color: string,
    Component: React.Component,
};

const SmallCard = ({ color, Component }: SmallCardProps) => (
    <div style={styles(color).background}>
        <Component />
    </div>
);

export default SmallCard;
