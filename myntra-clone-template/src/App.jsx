import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/MyntraRoutes'
//route->layout->container

const App = () => {
    return (
        <RouterProvider router={router}>App</RouterProvider>
    )
}

export default App