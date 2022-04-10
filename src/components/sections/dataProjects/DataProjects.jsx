import React from 'react';
import Section from '../Section';

const dataSection = {
    title: 'Data-Related Projects',
    text: `Since I started working with and learning about Data Science,
    I have been trying to learn more and more. In this section you
    are able to check out some of my Data Science projects.`,
    textColor: 'black',
    cardData: 'datascience'
};

const DataProjects = ({ bgColor }) => (
    <Section left={true} bgColor={bgColor} {...dataSection} />
);

export default DataProjects;
