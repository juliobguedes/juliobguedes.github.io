import React from 'react';
import profileImage from '../../../assets/img/profile.jpg';

import './About.css';

const styles = {
    fontSizeC: {
        paddingLeft: '7.5vw',
        paddingRight: '7.5vw',
        fontSize: '1.5em',
        justifyItems: 'center',
    },
    centerFull: {
        paddingTop: '15vh',
        paddingBottom: '15vh',
        minHeight: '100vh',
        textAlign: 'center',
    },
    center: {
        paddingTop: '15vh',
        paddingBottom: '15vh',
        textAlign: 'center',
    }
};

const AboutText = () => (
    <div style={styles.fontSizeC}>
        <p>
            I am a brazilian developer and undergraduate student in Computer Science at the 
            Federal University of Campina Grande (UFCG), currently on the sixth semester.
        </p>
        <p>
            I am currently working in the E-Pol project in the Software Practices Laboratory at UFCG.
            While that, I am focusing myself in learning more about web development and data science.
        </p>
        <p>
            Besides that, I like to keep learning about design in Web Development and Data Visualization.
            Those are two of the things that I consider being of great importance: the way that 
            the costumers see the product and the way that we see the data. The first one matters
            if we want our the users to keep using our products, and the second have a direct impact
            on the insights we have in the analysis of the data.
        </p>
    </div>
);

const About = () => (
    <>
        <div style={styles.center} bp="4@md offset-2@md 10@sm offset-2@sm 10@xs offset-2@xs">
            <img className="image-wrapper" src={profileImage} />
        </div>
        <div style={styles.centerFull} bp="7@md 12@sm 12@xs">
            <AboutText />
        </div>
    </>
);

export default About;
