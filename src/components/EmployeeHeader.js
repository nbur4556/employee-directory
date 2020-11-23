import React from 'react';
import '../stylesheets/employee-row.css';

const EmployeeHeader = () => {
    return (
        <section className='employee-row'>
            <p>ID</p>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Position</p>
            <p>Salary</p>
            <p>Phone Number</p>
            <p>Email</p>
            <p>Address</p>
            <p>Hire Date</p>
        </section>
    );
}

export default EmployeeHeader;