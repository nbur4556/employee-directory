import React from 'react';
import '../stylesheets/toolbar.css';

//Components
import ToolbarOptions from './ToolbarOptions.js';

class Toolbar extends React.Component {
    state = {
        filterOptionsBar: 'show-bar',
        sortOptionsBar: 'init-bar',
    }

    // Toggles Display Class of ToolbarOptions Component
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

                    <ul>
                        {/* Display Toolbar Options */}
                        <li onClick={() => this.toggleBarState('filterOptionsBar')}>Filter</li>
                        <li onClick={() => this.toggleBarState('sortOptionsBar')}>Sort</li>
                    </ul>
                </nav>

                {/* Toolbar Options */}
                <ToolbarOptions key="1" barState={this.state.filterOptionsBar}>
                    <form>
                        <label name="">ID</label>
                        <input name="filter-id" type="text" />

                        <label name="">First Name</label>
                        <input name="filter-firstName" type="text" />

                        <label name="">Last Name</label>
                        <input name="filter-lastName" type="text" />

                        <label name="">Position</label>
                        <input name="filter-position" type="text" />

                        <label name="">Salary</label>
                        <input name="filter-salary" type="text" />

                        <label name="">Phone Number</label>
                        <input name="filter-phoneNumber" type="text" />

                        <label name="">Email</label>
                        <input name="filter-email" type="text" />

                        <label name="">Address</label>
                        <input name="filter-address" type="text" />

                        <label name="">Hire Date</label>
                        <input name="filter-hireDate" type="text" />

                        <button type="submit">Filter</button>
                    </form>
                </ToolbarOptions>
                <ToolbarOptions key="2" barState={this.state.sortOptionsBar}>
                    <p>Hello World</p>
                </ToolbarOptions>
            </header>
        );
    }
}

export default Toolbar;