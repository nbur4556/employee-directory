import React from 'react';
import '../stylesheets/toolbar.css';

//Components
import ToolbarOptions from './ToolbarOptions.js';

const Toolbar = () => {
    return (
        <header>
            <nav>
                <h1>Employee Directory</h1>

                {/* Toolbar Options */}
                <ul>
                    <li>Sort</li>
                    <li>Filter</li>
                </ul>
            </nav>

            <ToolbarOptions />
        </header>
    );
}

export default Toolbar;