//CR1
//------

// import React from 'react'
// import { Fragment } from 'react';
// import { useState } from 'react'

// const App = () => {
//   let [displayText,setDisplayText]=useState(true);

//   if(displayText)
//   {
//     return <Fragment>
//       <h1>Welcome Navami C R</h1>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus aut deleniti ut facilis vitae, recusandae maxime! Nulla inventore beatae quis tempora ullam? Facere pariatur nisi asperiores aut doloremque fuga explicabo?
//         Quia culpa voluptatum cumque. Dolorum aperiam corporis aliquid incidunt a obcaecati rem, dolor voluptatibus libero. Iusto facilis obcaecati culpa, modi officiis fugit incidunt officia tenetur iste vitae at expedita aperiam.
//       </p>
//     </Fragment>
//   }
//   else{
//     return <Fragment>no data available</Fragment>
//   }
  
// }

// export default App
//==========================================================================

//CR1/CR2(ternary)
//--------

// import React from 'react'
// import { useState } from 'react'
// import Navbar from './components/navbar/Navbar';

// const App = () => {
//   const [isLoggedIn,isSetLoggedIn]=useState(true);
//   return (
//     <div>
//       <Navbar data={{isLoggedIn,isSetLoggedIn}}/>
//     </div>
//   )
// }

// export default App

//==============================================================

//CR2 (3rd eg)
//-----------

// import React, { useState } from 'react'
// import Products from './components/products/Products';
// import DATA from "../src/data.json"

// const App = () => {
//   let [state,setState]=useState(DATA)
//   return (
//     <section id='productsBlock'>
//       <article className='container'>
//         <Products state={state}/>
//       </article>

//     </section>
//   )
// }

// export default App
//================================================================

//CR2(4eg)
//-------

// import React, { useState } from 'react'

// const App = () => {
//   const [mode,setMode]=useState("c")
//   const [color,setColor]=useState("yellow")
  //------------------------------------------
  
    // if(mode==='a'|| color==="red"){
      
    //   return <h1 style={{color:color}}>Mode is A</h1>
    // }
    // else if(mode==='b'||color==="green"){
    //   return <h1 style={{color:color}}>Mode is B</h1>
    // }
    // else if(mode==='c' || color==="yellow"){
    //   return <h1 style={{color:color}}>Mode is C</h1>
      

    // }
    // else{
    //   return <h1>No matching keyword</h1>
    // }
    //----------------------------------------------
    // above by switch here

//     switch(mode,color){
//       case 'a' && 'red':
//         return <h1 style={{color}}>You selected A</h1>
//       case 'b' && 'green':
//         return <h1 style={{color}}>You selected B</h1>
//       case 'c' && 'yellow':
//         return <h1 style={{color}}>You selected C</h1>  
//       default:
//         return <h1>No modeis selected...</h1>
//     }

  
// }

// export default App
//========================================================================
//CR2(eg)
//---------

// import React, { useState } from 'react'
// import Users from './components/auth/Users'

// function App() {
//   let [state,setState]=useState([
//     {
//       id:1,
//       name:"navami",
//       age:19,
//       company:"google",
//       salary:30000,
//       role:"user"
//     },
//     {
//       id:2,
//       name:"tobby",
//       age:21,
//       company:"apple",
//       salary:40000,
//       role:"admin"
//     }

//   ])
//   return (
//     <div>
//       <Users state={state}/>
//     </div>
//   )
// }

// export default App
//============================================================
//CR3(eg)immediate invoke fn expression (no need to call explicitly)[executing immediately after they have defined]
//-----------

// import React, { useState } from 'react'
// import Notification from './components/messages/Notification'

// const App = () => {
//   let [state,setState]=useState([
//     {
//     text:"info text",
//     status:"info"
//    },
//    {
//     text:"warning text",
//     status:"warning"
//    },
//    {
//     text:"error text",
//     status:"error"
//    }
// ])
//   return (
//     <div>
//       <Notification state={state}/>
//     </div>
//   )
// }

// export default App

//=============================================================
//CR3(eg)
//---------

// import React, { useState } from 'react'

// const App = () => {
//   let [message,setmessage]=useState([
//     "some text",
//     "navami is learning"
//   ])
//   return <div>
//     <div>Messages<sup>1</sup></div>
//     </div>
  
// }

// export default App
//================================================================
//CR4(eg) Short-circuit AND Operator && , only want to render something or nothing unlike ternery ie if we dont want else
//--------

// import React, { useState } from 'react'
// let data=["shashi sir is taking class","navami is learning"]

// const App = () => {
//   let[messages,setMessages]=useState(data)
//   return (
//     <div>
//       Notifications
//       {
//          messages.length > 0 && <sup>{messages.length}</sup>
//       }
      
//     </div>
//   )
// }

// export default App

//=======================================================================
//CR4(eg) initial state it is loading since data is null but later when updated the array is fetched so we want to iterarte that so instead of null we can give loading
//-------- how to prevent null value

import React, { Fragment, useState } from 'react'

const App = () => {
  let [data,setData]=useState(null);
  (async function(){
    let res=await window.fetch('https://api.github.com/users')
    let finalVal=await res.json();
    setData(finalVal)

  })()
  return (
    <div>
      {
       data===null? 'loading...':
       data.map(user=>{
        return <Fragment key={user.id}>
          <li>{user.login}</li>
        </Fragment>
      })
      }
    </div>
  )
}

export default App
