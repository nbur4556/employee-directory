import React from 'react';
import './stylesheets/reset.css';
import './stylesheets/main.css'

// Components
import Toolbar from './components/Toolbar.js';
import EmployeeRow from './components/EmployeeRow.js';
import EmployeeHeader from './components/EmployeeHeader.js';

//Assets
import employeeData from './assets/employee-data.json';
import filterData from './assets/filterArray.js'

function App() {
    const renderEmployeeData = () => {
        let renderData = [];

        // Creates JSX EmployeeRow component for all employeeData
        for (const [index, employee] of employeeData.entries()) {
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

    const filterData = (e, filterBy, filterValue) => {
        e.preventDefault();
        console.log(filterBy);
        console.log(filterValue);
    }

    const sortData = (e, sortBy, sortValue) => {
        e.preventDefault();
        console.log(sortBy);
        console.log(sortValue);
    }

    return (
        <article>
            <Toolbar filterCB={filterData} sortCB={sortData} />

            {/* Employee Data */}
            <EmployeeHeader />
            {renderEmployeeData()}
        </article>
    );
}

export default App;
