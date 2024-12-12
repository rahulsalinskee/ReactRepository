import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About';
import NavBar from './NavBar/NavBar';
import Error from './Error/Error';
import UserList from './DynamicRoutingAndParams/UserList';
import UserProfile from './DynamicRoutingAndParams/UserProfile';

export default function ApplicationRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<h3>Home</h3>} />
                    <Route path='/home' element={<h3>Home</h3>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/navbar' element={<NavBar />} />
                    <Route path='/users' element={<UserList />} />
                    <Route path='/users/:userId' element={<UserProfile />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
