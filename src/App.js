import React from 'react';
import employeeData from './assets/employee-data.json';
import './stylesheets/reset.css';
import './stylesheets/main.css'

// Components
import Toolbar from './components/Toolbar.js';
import EmployeeRow from './components/EmployeeRow.js';
import EmployeeHeader from './components/EmployeeHeader.js';

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

    const filterData = e => {
        e.preventDefault();
        console.log("filterData");
    }

    const sortData = e => {
        e.preventDefault();
        console.log("sortData");
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
