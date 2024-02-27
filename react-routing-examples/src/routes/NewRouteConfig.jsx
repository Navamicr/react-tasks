import { createBrowserRouter } from "react-router-dom";
import Layouts from "./../layouts/Layouts"
import Home from '../pages/Home'
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Users from "../components/profiles/Users";
import Notfound from "../pages/Notfound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [

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
        ]
    }

])