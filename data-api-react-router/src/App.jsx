import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import GetUsers from './components/GetUsers'
//!createBrowserRouter includes data api
//BrowserRouter do not includes DATA API 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />

  },
  {
    path: '/users',
    element: <GetUsers />,
    loader: async () => {
      let data = await window.fetch('https://api.github.com/users');
      let finalData = await data.json();
      return finalData
    }
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}

export default App