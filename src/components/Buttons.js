import React from "react";

function Buttons() {
    return(
        <div className="container">
            <button className="btn btn-primary m-4">
                Count++
            </button>
            <button className="btn btn-secondary">
                Count--
            </button>
        </div>
    )
}

export { Buttons };