import React from 'react';
import '../stylesheets/employee-row.css';

const EmployeeRow = props => {
    return (
        <section className='employee-row'>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.phoneNumber}</p>
            <p>{props.email}</p>
            <p>{props.location}</p>
        </section>
    );
}

export default EmployeeRow;