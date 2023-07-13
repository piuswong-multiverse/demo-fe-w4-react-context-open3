import React, { useContext } from "react";
import { CountContext } from './CountProvider';

function Buttons() {
    const { increment, decrement } = useContext(CountContext);

    return(
        <div className="container">
            <button 
                className="btn btn-primary m-4"
                onClick={increment}
            >
                Count++
            </button>
            <button 
                className="btn btn-secondary"
                onClick={decrement}
            >
                Count--
            </button>
        </div>
    )
}

export { Buttons };