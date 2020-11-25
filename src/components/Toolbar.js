import React from 'react';
import '../stylesheets/toolbar.css';

//Components
import ToolbarOptions from './ToolbarOptions.js';

class Toolbar extends React.Component {
    state = {
        filterOptionsBar: 'init-bar',
        filterBy: '',
        filterValue: '',
        sortOptionsBar: 'init-bar',
        sortBy: '',
        sortValue: ''
    }

    handleHideAllBars = () => {
        if (this.state.filterOptionsBar === 'show-bar') {
            this.setState({ filterOptionsBar: 'hide-bar' });
        }
        if (this.state.sortOptionsBar === 'show-bar') {
            this.setState({ sortOptionsBar: 'hide-bar' });
        }
    }

    // Toggles Display Class of ToolbarOptions Component
    handleBarToggle = toolbarKey => {
        if (this.state[toolbarKey] === 'init-bar' || this.state[toolbarKey] === 'hide-bar') {
            this.handleHideAllBars();
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
                        <li onClick={() => this.handleBarToggle('filterOptionsBar')}>Filter</li>
                        <li onClick={() => this.handleBarToggle('sortOptionsBar')}>Sort</li>
                    </ul>
                </nav>

                {/* Toolbar Options */}
                <ToolbarOptions key="1" barState={this.state.filterOptionsBar}>
                    <form>
                        {/* Filter By Options */}
                        <label htmlFor="filter-by">Filter By</label>
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

                        {/* Filter Value Field */}
                        <input name="filter-value" type='text' placeholder="Value" />

                        {/* Filter Method Button */}
                        <button type="submit" onClick={event => {
                            this.props.filterCB(event, this.state.filterBy, this.state.filterValue)
                        }}>Filter</button>
                    </form>
                </ToolbarOptions>
                <ToolbarOptions key="2" barState={this.state.sortOptionsBar}>
                    <form>
                        {/* Sort By Options */}
                        <label htmlFor="sort-by">Sort By</label>
                        <select name="sort-by">
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

                        {/* Sort Value Options */}
                        <label htmlFor="ascending-value">Ascending</label>
                        <input name="sort-value" type="radio" value="ascending" />
                        <label htmlFor="descending-value">Descending</label>
                        <input name="sort-value" type="radio" value="descending" />

                        {/* Sort Method Button */}
                        <button type="submit" onClick={event => {
                            this.props.sortCB(event, this.state.sortBy, this.state.sortValue)
                        }}>Sort</button>
                    </form>
                </ToolbarOptions>
            </header>
        );
    }
}

export default Toolbar;