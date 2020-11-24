import React from 'react';
import '../stylesheets/toolbar-options.css';

const ToolbarOptions = props => {
    return (
        <section className={`toolbar-options ${props.barState}`}>
            {props.children}
        </section>
    );
}

export default ToolbarOptions;