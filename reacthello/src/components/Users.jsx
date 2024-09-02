import React from 'react';
import Usercard from './Usercard';

function Users() {
    const data = [
        { name: 'Ali', email: 'ali@gmail.com', rollno: 123 },
        { name: 'Hamza', email: 'hamza@gmail.com', rollno: 785 },
        { name: 'Sara', email: 'sara@gmail.com', rollno: 456 },
        { name: 'Mona', email: 'mona@gmail.com', rollno: 789 },
        { name: 'Ahmed', email: 'ahmed@gmail.com', rollno: 321 }
    ];

    return (
        <>
            <h3>User's Data using Array and Map</h3>
            {data.map(({ name, email, rollno }) => (
                <Usercard name={name} email={email} rollno={rollno} />                
            ))}
        </>
    );
}

export default Users;
