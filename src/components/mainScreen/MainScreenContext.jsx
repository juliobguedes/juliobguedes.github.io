import React from 'react';

const MainScreenContext = React.createContext({
    contacts: [],
    projects: {},
    lang: ''
});

export default MainScreenContext;
