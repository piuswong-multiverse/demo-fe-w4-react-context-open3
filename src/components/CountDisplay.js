import React, { useContext } from 'react';
import { Buttons } from './Buttons';
import { CountContext } from './CountProvider';

function CountDisplay() {

    // this lets consume the context data!
    const { count } = useContext(CountContext);

    return(
        <div className="text-success">
            <Buttons />
            <h2>The current count is: { count } </h2>
        </div>
    )
}

export { CountDisplay }