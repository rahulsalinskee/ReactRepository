import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* ***** User Mock Data ***** */
const userData = [
    {
        id: 1,
        name: 'John',
        age: 25
    },
    {
        id: 2,
        name: 'Karl',
        age: 30
    },
    {
        id: 3,
        name: 'Bob',
        age: 35
    }
];

export default function UserList() {
    const navigateBack = useNavigate();

    function BackButtonClickEventHandler(event) {
        event.preventDefault();
        navigateBack(-1);
    }

    return (
        <>
            <div>
                <h3>User List</h3>
                <ul>
                    {
                        userData.map(user => {
                            return (
                                <li key={user.id}>
                                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <button onClick={BackButtonClickEventHandler}>Back</button>
            </div>
        </>
    )
}
