import React from 'react';
import '../stylesheets/employee-row.css';

const EmployeeRow = () => {
    return (
        <section className='employee-row'>
            <p>Employee ID</p>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Phone Number</p>
            <p>Email</p>
            <p>Address</p>
            <p>Position</p>
            <p>Salary</p>
            <p>Hire Date</p>
        </section>
    );
}

export default EmployeeRow;