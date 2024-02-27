import React from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
//use params returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.

const Users = () => {
    let location = useLocation();
    let { name } = useParams();
    return (
        <div>
            {name}
            {Outlet}
        </div>
    )
}

export default Users