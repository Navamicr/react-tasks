// HOC1
//-----------

// import React from 'react'
// import Profile from './components/auth/Profile'
// import Menu from './components/navbar/Menu'

// const App = () => {
//   return (
//     <div>
//       <Profile />
//       <Menu />
//     </div>
//   )
// }

// export default App
//==========================================hoc1

import React from 'react'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App = () => {
  return (
    <div className='flex'>
      <div className='profile'>
        {/* <Login /> */}
        <Register />

      </div>
      <div className='user'>

      </div>

    </div>
  )
}

export default App
