import React, { createContext, useState } from 'react';

const CountContext = createContext(); // provides data...

// define a "wrapper"
function CountProvider( {children} ) {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    return(
        <CountContext.Provider value={ {count, increment, decrement} }>
            { children }
        </CountContext.Provider>
    );
}

export { CountProvider, CountContext }