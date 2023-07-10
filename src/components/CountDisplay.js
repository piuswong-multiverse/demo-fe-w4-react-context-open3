import React from 'react';
import { Buttons } from './Buttons';

function CountDisplay() {
    return(
        <div className="text-success">
            <Buttons />
            <h2>The current count is: [count goes here] </h2>
        </div>
    )
}

export { CountDisplay }