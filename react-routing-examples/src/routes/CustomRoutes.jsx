import { useRoutes } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Users from "../components/profiles/Users";
import Notfound from "../pages/Notfound";

const CustomRoutes = () => {
    let element = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/users',
            element: <Users />
        },
        {
            path: '*',
            element: <Notfound />
        },

    ])
    return (
        element
    )
}

export default CustomRoutes