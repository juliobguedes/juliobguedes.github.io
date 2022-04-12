// @flow

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import MainScreen from '../mainScreen/MainScreen'
import { contacts, projects, sections } from '../../lib';

window.addEventListener('keydown', function (e) {
    const key = e.key || e.keyCode;
    if (e.ctrlKey && (key === 'p' || key == 80)) {
        window.open('./JulioGuedes_Current.pdf')
        e.preventDefault();
    }
});

const MP = () => (
    <MainScreen
      contacts={contacts}
      projects={projects}
      sections={sections}
    />
);

const App = () => (
    <Router>
        <Routes>
            <Route path="/pt" element={
                <MP />
            } />
            <Route exact path="/" element={
                <MP />
            } />
        </Routes>
    </Router>
);

export default App;
