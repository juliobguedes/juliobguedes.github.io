import React from 'react';

const AppContext = React.createContext({
    contacts: [],
    projects: {},
});

export default AppContext;