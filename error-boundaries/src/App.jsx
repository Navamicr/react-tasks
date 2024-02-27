// import React from 'react'
// import MyComponents from './MyComponents'
//Error boudaries are js components that catch js errors anywhere in their child component tree, log those errors and display fallback ui instead of the component tree that crashed
// and error boudaries catch erors during rendering in life cycle methods
//error boundaries do not catch errors for:
//1.Even handlers
//2.Asynchronous code like setTimeout
//3.server side rendering
// const App = () => {
//   return (
//     <div>
//       <MyComponents/>
//     </div>
//   )
// }

// export default App
//===================================================lazy loading
//advance optimization techniques when application demands only it loads so reduce page load time.,on demand loading
import React from 'react'
import Login from './Login'

const App = () => {
  return (
    <div>
      <h1>App</h1>
      {/* <button>Login</button> */}
      <Login/>
    </div>
  )
}

export default App