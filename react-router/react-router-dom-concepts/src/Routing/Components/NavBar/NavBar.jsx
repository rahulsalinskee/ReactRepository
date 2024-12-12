import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href='/home'>Home (href)</a>
                        <br />
                        <Link to='/home'>Home (Link)</Link>
                    </li>
                    <br />
                    <li>
                        <a href='/about'>About (href)</a>
                        <br />
                        <Link to='/about'>About (Link)</Link>
                    </li>
                    <br />
                    <li>
                        <Link to='/user'>User list</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
