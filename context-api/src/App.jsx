// import { createContext } from 'react'

// import Profile from './components/users/Profile'
// import UserProvider from './context/userContext'
// import AirtelProvider from './context/AirtelContext'
// import Shashi from './components/users/Shashi'
// import Navami from './components/users/Navami'

// // console.log(createContext)

// // let myContext = createContext("")
// // console.log(myContext)
// const App = () => {
//     return (


//         // <UserProvider>
//         //     <Profile />
//         // </UserProvider>

//         <AirtelProvider>
//             <Shashi />
//             <hr />
//             <Navami />
//         </AirtelProvider>
//     )
// }

// export default App
//========================================================ContextApi 2

// import React from 'react'
// import Counter from './Counter'
// import CounterProvider from './context/CounterContext'

// const App = () => {
//     return (
//         <section id='mainContainer'>
//             <article>
//                 <CounterProvider>
//                     <Counter />
//                 </CounterProvider>
//             </article>

//         </section>
//     )
// }

// export default App
//===========================================================ContextApi 3
import React from 'react'
import Container from './components/Container'
import { themeContextApi } from './context/themeContext'
import { theme } from './context/themeContext'


const App = () => {
    return (
        <themeContextApi.Provider value={theme}>
            <Container />
        </themeContextApi.Provider>
    )
}

export default App