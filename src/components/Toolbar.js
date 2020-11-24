import React from 'react';
import '../stylesheets/toolbar.css';

//Components
import ToolbarOptions from './ToolbarOptions.js';

class Toolbar extends React.Component {
    state = {
        barState1: 'init-bar',
        barState2: 'init-bar',
    }

    toggleBarState = toolbarKey => {
        if (this.state[toolbarKey] === 'init-bar' || this.state[toolbarKey] === 'hide-bar') {
            this.setState({ [toolbarKey]: 'show-bar' });
        }
        else {
            this.setState({ [toolbarKey]: 'hide-bar' });
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <h1>Employee Directory</h1>

                    {/* Toolbar Options */}
                    <ul>
                        <li onClick={() => this.toggleBarState('barState1')}>Filter</li>
                        <li onClick={() => this.toggleBarState('barState2')}>Sort</li>
                    </ul>
                </nav>

                <ToolbarOptions key="1" barState={this.state.barState1} />
                <ToolbarOptions key="2" barState={this.state.barState2} />
            </header>
        );
    }
}

export default Toolbar;