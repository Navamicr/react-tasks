import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layouts = () => {
    const users = [
        {
            id: 1,
            name: "shashi",
            company: "qspiders",
        },
        {
            id: 2,
            name: "priyan",
            company: "jspiders",
        },
        {
            id: 3,
            name: "venki",
            company: "testyantra",
        },

    ]
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {/* <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li> */}
                <li>
                    <Link to='/users'>
                        {
                            users.map(user => {
                                return (
                                    <Fragment key={user.id}>
                                        <li>
                                            <Link to={`/${user.name}`} key={user.id}>{user.name}</Link>
                                        </li>
                                    </Fragment>
                                )
                            })
                        }

                    </Link>
                </li>
            </ul>
            <hr />
            {/* Renders the child route's element , if there is one */}
            <Outlet />
        </div>
    )
}

export default Layouts