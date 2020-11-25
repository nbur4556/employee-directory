import React from 'react';
import './stylesheets/reset.css';
import './stylesheets/main.css'

// Components
import Toolbar from './components/Toolbar.js';
import EmployeeRow from './components/EmployeeRow.js';
import EmployeeHeader from './components/EmployeeHeader.js';

//Assets
import employeeData from './assets/employee-data.json';
import processData from './assets/processData.js'

class App extends React.Component {
    state = {
        employeeTable: ""
    }

    componentDidMount() {
        this.setState({
            employeeTable: this.handleEmployeeTable(employeeData)
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
                    employeeId={employee.id}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    position={employee.position}
                    salary={employee.salary}
                    phoneNumber={employee.phoneNumber}
                    email={employee.email}
                    address={`${employee.address}, ${employee.city}, ${employee.state} ${employee.zip}`}
                    hireDate={employee.hireDate}
                />);
        }

        return renderData;
    }

    handleFilterData = (e, filterBy, filterValue) => {
        e.preventDefault();

        const data = processData.filter(employeeData, filterBy, filterValue);
        this.setState({ employeeTable: this.handleEmployeeTable(data) });
    }

    handleSortData = (e, sortBy, sortValue) => {
        e.preventDefault();

        const data = processData.sort(employeeData, sortBy, sortValue);
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
