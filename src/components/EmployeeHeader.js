import React from 'react';
import '../stylesheets/employee-row.css';

const EmployeeHeader = () => {
    return (
        <section className='employee-row'>
            <h6>First Name</h6>
            <h6>Last Name</h6>
            <h6>Phone Number</h6>
            <h6>Email</h6>
            <h6>Address</h6>
        </section>
    );
}

export default EmployeeHeader;