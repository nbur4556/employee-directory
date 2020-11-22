import React from 'react';
import '../stylesheets/toolbar.css';

//Components
import ToolbarOptions from './ToolbarOptions.js';

const Toolbar = () => {
    let currentBarState = 'init-bar';

    const toggleBarState = () => {
        if (currentBarState === 'init-bar' || currentBarState === 'hide-bar') {
            currentBarState = 'show-bar';
        }
        else {
            currentBarState = 'hide-bar';
        }

        console.log(currentBarState);
    }

    return (
        <header>
            <nav>
                <h1>Employee Directory</h1>

                {/* Toolbar Options */}
                <ul>
                    <li onClick={toggleBarState}>Filter</li>
                    <li onClick={toggleBarState}>Sort</li>
                </ul>
            </nav>

            <ToolbarOptions barState={currentBarState} />
        </header>
    );
}

export default Toolbar;