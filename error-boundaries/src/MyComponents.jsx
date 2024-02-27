import React, { useState } from 'react'

const MyComponents = () => {
    const [state,setState]=useState({count:0})
    let handleClick=()=>{
        setState({count:state.count+1});
    }
    if(state.count>10){
        throw new Error('count is not more than 10')
    }
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default MyComponents