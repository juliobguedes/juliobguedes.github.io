import React from 'react';

const styles = bgColor => ({
    background: {
        backgroundColor: bgColor || 'white',
        minHeight: '100vh',
    },
});

const BigCard = ({ Component, color }) => (
    <div style={styles(color).background} bp="grid vertical-center">
        <Component />
    </div>
);

export default BigCard;
