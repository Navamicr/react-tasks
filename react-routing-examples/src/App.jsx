// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
//browser router is based on html5 history api(pushState,replaceState, and the popstate event)to keep your UI in sync with UrL.it is the parent component that is used to store all of the other components

// window.history.pushState({ name: "shahsi" }, "push state example")
// console.log(window.history.state)
// console.log(history)

// window.history.replaceState({ name: "dixith" }, "replace state")
// console.log(window.history.state)
// console.log(history)

// window.addEventListener("popstate", e => {
//     console.log("hello")
//     console.log(`location:${document.location},state:${JSON.stringify(e.state)}`)
// })

// const App = () => {
//     return (
//         <div>App</div>
//     )
// }

// export default App
//===================================================================Router2 v6

// import React from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Login from './components/auth/Login'
// import Home from './pages/Home'
// import Register from './components/auth/Register'
// import Users from './components/profiles/Users'
// import Notfound from './pages/Notfound'

// const App = () => {
//     return (
//         <BrowserRouter>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                 <li> <Link to='/register'>Register</Link></li>
//                 <li><Link to='/users'>Users</Link></li>




//             </ul>
//             <Routes>
//                 {/* is a new component introduced in react router dom 6 onwards and it replaces the switch component */}
//                 <Route path='/' element={<Home />} />
//                 {/* child component that renders a specific UI component when URL matches the specified path using path attribute */}
//                 <Route path='/login' element={<Login />} />
//                 <Route path='/register' element={<Register />} />
//                 <Route path='/users' element={<Users />} />
//              //! PAGE NOT FOUND and page not found always should be at the bottom of the route

//                 <Route path='*' element={<Notfound />} />


//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default App
//=======================================================v6.4 onwards data apis

// import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './components/auth/Login'
// import Users from './components/profiles/Users'
// import Register from './components/auth/Register'
// import Layouts from './layouts/Layouts'
// import Notfound from './pages/Notfound'
// //createBrowserRouter enables data api's like loaders,actions,fetcher and many more

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layouts />,
//         children: [

//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/login',
//                 element: <Login />
//             },
//             {
//                 path: '/users',
//                 element: <Users />
//             },
//             {
//                 path: "/register",
//                 element: <Register />
//             },
//             {
//                 path: "*",
//                 element: <Notfound />
//             },
//         ]
//     },

// ])
// console.log(router)



// const App = () => {
//     return (
//         <>

//             <RouterProvider router={router}>
//                 <ul>
//                     <li>
//                         <Link to='/'>Home</Link>
//                     </li>
//                     <li>
//                         <Link to='/login'>Login</Link>
//                     </li>
//                 </ul>
//             </RouterProvider>
//         </>
//     )
// }

// export default App

//==========================================================router3

// import React from 'react'
// import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
// import Layouts from './layouts/Layouts'
// import Home from './pages/Home'
// import Login from './components/auth/Login'
// import Users from './components/profiles/Users'
// import Notfound from './pages/Notfound'
// import Register from './components/auth/Register'

// const router = createBrowserRouter(createRoutesFromElements(
//     <Route path='/' element={<Layouts />}>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/users' element={<Users />} />
//         <Route path='*' element={<Notfound />} />
//     </Route>
// ))

// const App = () => {
//     return (
//         <RouterProvider router={router}></RouterProvider>
//     )
// }

// export default App
//====================================================================router3
// import React from 'react'
// import { BrowserRouter as Router, Routes } from 'react-router-dom'
// import CustomRoutes from './routes/CustomRoutes'
// import Navbar from './components/navbar/Navbar'

// const App = () => {
//     return (
//         <Router>
//             <Navbar />

//             <hr />

//             <CustomRoutes />

//         </Router>
//     )
// }

// export default App
//==========================================================================router3 by using NewRouteConfig

// import React from 'react'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './routes/NewRouteConfig'

// const App = () => {
//     return (
//         <RouterProvider router={router}>

//         </RouterProvider>
//     )
// }

// export default App
//===========================================================router3 dynamic route
// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layouts from './layouts/Layouts'
// import Home from './pages/Home'
// import Login from './components/auth/Login'
// import Register from './components/auth/Register'
// import Users from './components/profiles/Users'
// import Notfound from './pages/Notfound'
// let router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layouts />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },

//             {
//                 path: ':name',
//                 element: <Users />
//             },
//             {
//                 path: '*',
//                 element: <Notfound />
//             },
//         ]
//     }
// ])

// const App = () => {
//     return (
//         <RouterProvider router={router}>

//         </RouterProvider>
//     )
// }

// export default App
//===============================================router5 (4 is myntra cloning)

import React from 'react'

const App = () => {
    return (
        <div>App</div>
    )
}

export default App