import React from 'react';
import './stylesheets/reset.css';
import './stylesheets/main.css'

// Components
import Toolbar from './components/Toolbar.js';
import EmployeeRow from './components/EmployeeRow.js';

function App() {
    return (
        <article>
            <Toolbar />

            <EmployeeRow />
        </article>
    );
}

export default App;
