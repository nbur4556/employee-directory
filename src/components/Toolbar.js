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
                        <label for="filter-by">Filter By</label>
                        <select name="filter-by">
                            <option value="id">ID</option>
                            <option value="first-name">First Name</option>
                            <option value="last-name">Last Name</option>
                            <option value="position">Position</option>
                            <option value="salary">Salary</option>
                            <option value="phone-number">Phone Number</option>
                            <option value="email">Email</option>
                            <option value="address">Address</option>
                            <option value="hire-date">Hire Date</option>
                        </select>

                        <input type='text' placeholder="Value" />

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