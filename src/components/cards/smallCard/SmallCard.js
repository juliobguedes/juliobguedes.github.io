import React from 'react';

const styles = bgColor => ({
    background: {
        backgroundColor: bgColor || 'inherit',
        height: '90vh',
        borderRadius: '1.5px',

    },
});

const SmallCard = ({ color, Component }) => (
    <div style={styles(color).background} bp="grid vertical-center">
        <Component />
    </div>
);

export default SmallCard;
