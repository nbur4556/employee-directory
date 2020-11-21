import React from 'react';
import '../stylesheets/toolbar.css';

const Toolbar = () => {
    return (
        <nav>
            <h1>Employee Directory</h1>

            {/* Toolbar Options */}
            <ul>
                <li>Sort</li>
                <li>Filter</li>
            </ul>
        </nav>
    );
}

export default Toolbar;