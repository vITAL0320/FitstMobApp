import React from 'react';

export const VisibleContext = React.createContext({
    visible: false,
    setVisible: () => {},
});