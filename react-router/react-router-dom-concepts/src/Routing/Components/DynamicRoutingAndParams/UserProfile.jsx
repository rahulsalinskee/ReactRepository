import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

export default function UserProfile() {
    const { userId } = useParams();
    const navigateBack = useNavigate();
    const user = userData.find((user) => user.id === parseInt(userId));

    function BackButtonClickEventHandler(event) {
        event.preventDefault();
        navigateBack(-1);
    }
    return (
        <>
            <div>
                <h3>User Profile</h3>
                {
                    user ? (
                        <>
                            <p>ID: {user.id}</p>
                            <p>Name: {user.name}</p>
                            <p>Age: {user.age}</p>
                        </>
                    ) : (
                        <p>User not found</p>
                    )
                }
                <br />
                <button onClick={BackButtonClickEventHandler}>Back</button>
            </div>
        </>
    )
}
