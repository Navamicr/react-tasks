// import React, { useState } from 'react'
// import  { MemorizedComp } from './Count'

// const App = () => {
  // let [count,setCount]=useState(0)

//   let Increment=()=>{
    // setCount(count+1)

//   }
//   return (
//     <div>
//       <h1>i am parent component<strong style={{color:'green'}}> {count} </strong></h1>
//       <button onClick={Increment}>Increment</button>
//       <hr />
//       <MemorizedComp count={{count,Increment}}/>
//     </div>
//   )
// }

// export default App
//=================================================================================

// import React, { useCallback, useMemo, useState } from 'react'
// import  { MemorizedComp } from './Count'

// const App = () => {
  
//   let [state,setState]=useState({
//     count:0,
//   })
//   //memorizing that value and get same value from cache
//   let Increment=useCallback(()=>{
   
//     setState({count:state.count+1});
//   },[state.count])
//   let {count}=state;
//   return (
//     <div>
//       <h1>i am parent component<strong style={{color:'green'}}> {state.count} </strong></h1>
//       <button onClick={Increment}>Increment</button>
//       <hr />
//       <MemorizedComp count={{count,Increment}}/>
//     </div>
//   )
// }

// export default App
//================================================================================
// import React, { useCallback, useState } from 'react'
// import  { MemorizedComp } from "./Count"
// const App = () => {
//   const [name,setName]=useState("")
//   const [address,setAddress]=useState("")

//   let Memorized=useCallback(()=>{
//     <MemorizedComp/>
//   },[])
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='name'/>
//       </label>

//       <label>
//         Address:
//         <input type="text" value={address} onChange={e=>setAddress(e.target.value)} placeholder='address'/>
//       </label>
//       <hr />
//     <MemorizedComp name={name}/>
//     </div>
//   )
// }

// export default App
//==============================================================================memo eg

import React, {useState } from 'react'

// import MemoExample from './MemoExample'
import OneMoreMemo from './OneMoreMemo'
import CallbackExample from './CallbackExample'
const App = () => {
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")

  
  return (
     <div>
    {/* //   <h1>Parent Component</h1>
    //   <label>
    //     Name:
    //     <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='name'/>
    //   </label>

    //   <label>
    //     Address:
    //     <input type="text" value={address} onChange={e=>setAddress(e.target.value)} placeholder='address'/>
    //   </label>
    //   <hr /> */}
    {/* <MemorizedComp name={name}/> */}
    {/* <MemoExample/> */}

    <h1>ParentComponent</h1>
    {/* <OneMoreMemo/> */}
    <CallbackExample/>
    </div>
  )
}

export default App