import React from 'react';
import '../stylesheets/toolbar.css';

//Components
import ToolbarOptions from './ToolbarOptions.js';

class Toolbar extends React.Component {
    state = {
        barState: 'init-bar'
    }

    toggleBarState = () => {
        if (this.state.barState === 'init-bar' || this.state.barState === 'hide-bar') {
            this.setState({ barState: 'show-bar' });
        }
        else {
            this.setState({ barState: 'hide-bar' });
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <h1>Employee Directory</h1>

                    {/* Toolbar Options */}
                    <ul>
                        <li onClick={this.toggleBarState}>Filter</li>
                        <li onClick={this.toggleBarState}>Sort</li>
                    </ul>
                </nav>

                <ToolbarOptions barState={this.state.barState} />
            </header>
        );
    }
}

export default Toolbar;