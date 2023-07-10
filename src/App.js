import React from 'react';
import { CountDisplay } from './components/CountDisplay';

function App() {
    return(
        <div className='layout'>
            <h1>Demo time! React Context</h1>
            <p>React Context lets us pass data to a lot of child components...</p>
            <CountDisplay />
        </div>
    )
}

export { App };