import React from 'react';
import '../stylesheets/toolbar.css';

//Components
import ToolbarOptions from './ToolbarOptions.js';

class Toolbar extends React.Component {
    state = {
        filterOptionsBar: 'init-bar',
        filterBy: 'id',
        filterValue: '',
        sortOptionsBar: 'init-bar',
        sortBy: 'id',
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

    handleChangeInput = event => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
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
                        <label htmlFor="filterBy">Filter By</label>
                        <select name="filterBy" onChange={this.handleChangeInput}>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="phone">Phone Number</option>
                            <option value="email">Email</option>
                            <option value="address">Address</option>
                        </select>

                        {/* Filter Value Field */}
                        <input
                            name="filterValue"
                            type='text'
                            onChange={this.handleChangeInput}
                            value={this.state.filterValue}
                            placeholder="Value"
                        />

                        {/* Filter Method Button */}
                        <button type="submit" onClick={event => {
                            this.handleHideAllBars();
                            this.props.filterCB(event, this.state.filterBy, this.state.filterValue)
                        }}>Filter</button>
                    </form>
                </ToolbarOptions>

                <ToolbarOptions key="2" barState={this.state.sortOptionsBar}>
                    <form>
                        {/* Sort By Options */}
                        <label htmlFor="sortBy">Sort By</label>
                        <select name="sortBy" onChange={this.handleChangeInput}>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="phone">Phone Number</option>
                            <option value="email">Email</option>
                            <option value="address">Address</option>
                        </select>

                        {/* Sort Value Options */}
                        <label htmlFor="ascending-value">Ascending</label>
                        <input
                            name="sortValue"
                            type="radio"
                            onChange={this.handleChangeInput}
                            value="ascending"
                        />
                        <label htmlFor="descending-value">Descending</label>
                        <input
                            name="sortValue"
                            type="radio"
                            onChange={this.handleChangeInput}
                            value="descending"
                        />

                        {/* Sort Method Button */}
                        <button type="submit" onClick={event => {
                            this.handleHideAllBars();
                            this.props.sortCB(event, this.state.sortBy, this.state.sortValue)
                        }}>Sort</button>
                    </form>
                </ToolbarOptions>
            </header>
        );
    }
}

export default Toolbar;