import React from 'react';
import employeeData from './assets/employee-data.json';
import './stylesheets/reset.css';
import './stylesheets/main.css'

// Components
import Toolbar from './components/Toolbar.js';
// import EmployeeRow from './components/EmployeeRow.js';
import EmployeeHeader from './components/EmployeeHeader.js';

function App() {
    const renderEmployeeData = () => {
        // let renderData = ''

        for (const employee of employeeData) {
            console.log(employee);
        }

        return (<div></div>);
    }

    return (
        <article>
            <Toolbar />

            {/* Employee Data */}
            <EmployeeHeader />
            {renderEmployeeData()}
            {/* <EmployeeRow
                employeeId='0'
                firstName='John'
                lastName='Doe'
                position='Developer'
                salary='70000'
                phoneNumber='555-523-2287'
                email='jdoe@email.com'
                address='123 Lane Drive, City, ST 12345'
                hireDate='02/15/2021'
            />
            <EmployeeRow
                employeeId='1'
                firstName='Jane'
                lastName='Doe'
                position='IT'
                salary='65000'
                phoneNumber='555-641-2299'
                email='janeydoe@email.com'
                address='4362 South Park, City, ST 12345'
                hireDate='08/20/2020'
            />
            <EmployeeRow
                employeeId='2'
                firstName='Bill'
                lastName='McDonald'
                position='Farmer'
                salary='55000'
                phoneNumber='555-992-4711'
                email='oldmacdonald@email.com'
                address='1221 Farm Rd, City, ST 12345'
                hireDate='01/23/2021'
            />
            <EmployeeRow
                employeeId='3'
                firstName='Joe'
                lastName='Biden'
                position='President'
                salary='100000'
                phoneNumber='555-123-4567'
                email='whthouse@email.gov'
                address='1 President Av, City, ST 12345'
                hireDate='01/12/2021'
            /> */}
        </article>
    );
}

export default App;
