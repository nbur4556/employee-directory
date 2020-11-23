import React from 'react';
import '../stylesheets/employee-row.css';

const EmployeeRow = props => {
    return (
        <section className='employee-row'>
            <p>{props.employeeId}</p>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.position}</p>
            <p>{props.salary}</p>
            <p>{props.phoneNumber}</p>
            <p>{props.email}</p>
            <p>{props.address}</p>
            <p>{props.hireDate}</p>
        </section>
    );
}

export default EmployeeRow;