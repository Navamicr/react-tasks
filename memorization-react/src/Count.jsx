// import React from 'react'

// const Count = ({count:{count,Increment}}) => {
//   return (
//     <div>
//         {console.log("iam child")}
//         <h1>iam child component <strong style={{color:'red'}}>{count}</strong></h1>
//         <button onClick={Increment}>Increment from child</button>
//     </div>
//   )
// }

// export const MemorizedComp= React.memo(Count);
//==========================================================

//import React from 'react'

// const Count = ({count:{count,Increment}}) => {
//   return (
//     <div>
//         {console.log("iam child")}
//         <h1>iam child component <strong style={{color:'red'}}>{count}</strong></h1>
//         <button onClick={Increment}>Increment from child</button>
//     </div>
//   )
// }

// export const MemorizedComp= React.memo(Count);
//================================================================
import React from 'react'

const Count = ({name}) => {
  return (
    <div>
      {console.log('check child component is rerendering or not')}
      <h1>{name}</h1>
    </div>
  )
}

export const MemorizedComp=React.memo(Count)