import React from 'react';
import './stylesheets/reset.css';
import './stylesheets/main.css'

// Components
import Toolbar from './components/Toolbar.js';
import EmployeeRow from './components/EmployeeRow.js';
import EmployeeHeader from './components/EmployeeHeader.js';

//Assets
import processData from './assets/processData.js'
import api from './assets/api.js';

class App extends React.Component {
    state = {
        employeeData: {},
        employeeTable: ""
    }

    componentDidMount() {
        api(50, null, response => {
            console.log(response.results);

            this.setState({
                employeeData: response.results,
                employeeTable: this.handleEmployeeTable(response.results)
            });
        });
    }

    // Takes an object of employee data and returns an array of EmployeeRow components 
    handleEmployeeTable = (data) => {
        let renderData = [];

        // Creates JSX EmployeeRow component for all employeeData
        for (const [index, employee] of data.entries()) {
            renderData.push(
                <EmployeeRow
                    key={index}
                    employeeId={employee.id.value}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phoneNumber={employee.phone}
                    email={employee.email}
                    address={employee.location.city}
                />);
        }

        return renderData;
    }

    handleFilterData = (e, filterBy, filterValue) => {
        e.preventDefault();

        const data = processData.filter(this.state.employeeData, filterBy, filterValue);
        this.setState({ employeeTable: this.handleEmployeeTable(data) });
    }

    handleSortData = (e, sortBy, sortValue) => {
        e.preventDefault();

        const data = processData.sort(this.state.employeeData, sortBy, sortValue);
        this.setState({ employeeTable: this.handleEmployeeTable(data) });
    }

    render() {
        return (
            <article>
                <Toolbar filterCB={this.handleFilterData} sortCB={this.handleSortData} />

                {/* Employee Data */}
                <EmployeeHeader />
                {this.state.employeeTable}
            </article >
        );
    }
}

export default App;
