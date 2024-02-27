import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import AllUsers from './AllUsers'

const Dashboard = () => {
    return (
        <div>
            <h1>DASHBOARD</h1>
            <main className='dashboard-content'>
                <ul>
                    <li>
                        {/* <Link to="/players" state={{ name: 'sachin', country: 'India', city: 'Mumbai' }}>Players</Link> */}
                        <NavLink to='/'
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >PRODUCTS</NavLink>

                        {/* <Link to='/users' state={{ name: 'navami', company: 'google', salary: 120000 }}>USERS</Link> */}
                        <NavLink to='/users'
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >USERS</NavLink>
                        {/* <Link to='/products' state={{ name: 'tobby', company: 'apple', city: 'LA' }}>PRODUCTS</Link> */}

                        <NavLink to="/players"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >Players</NavLink>
                    </li>
                </ul>
            </main>
            <Outlet />

        </div>
    )
}

export default Dashboard