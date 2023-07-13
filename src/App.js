import React from 'react';
import { CountDisplay } from './components/CountDisplay';

// provide data to whatever you wrap with it...
import { CountProvider } from './components/CountProvider'; 

function App() {
    return(
        <div className='layout'>
            <h1>Demo time! React Context</h1>
            <p>React Context lets us pass data to a lot of child components...</p>
            <CountProvider>
                <CountDisplay />
            </CountProvider>
        </div>
    )
}

export { App };