import React from 'react'
import Root from './components/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/users/Dashboard'
import AllUsers from './components/users/AllUsers'
import Products from './components/products/Products'
import Players from './components/players/Players'
import Profile from './components/users/Profile'
import Login from './components/auth/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [

      {

        path: '/',
        element: <Dashboard />,
        children: [
          {
            path: '/players',
            element: <Players />
          },
          {
            path: 'users',
            // index: true, //to make it as default
            element: <AllUsers />,

          },
          {
            index: true,
            // path: '/products',
            element: <Products />
          },
          {
            path: 'users/:id',
            element: <Profile />
          }

        ],


      },
      {
        path: '/login',
        element: <Login />
      }

    ]

  },
])

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App