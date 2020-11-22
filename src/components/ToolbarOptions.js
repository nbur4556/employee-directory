import React from 'react';
import '../stylesheets/toolbar-options.css';

const ToolbarOptions = props => {
    return (
        <section className={`toolbar-options ${props.barState}`}></section>
    );
}

export default ToolbarOptions;