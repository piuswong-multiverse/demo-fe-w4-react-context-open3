import React, { createContext } from 'react';

const CountContext = createContext(); // provides data...

// define a "wrapper"
function CountProvider( {children} ) {
    return(
        <CountContext.Provider value={ 999 }>
            { children }
        </CountContext.Provider>
    );
}

export { CountProvider, CountContext }