import React, { useMemo } from "react";
import { useState } from "react";

let factorial=n=>{
    let i=0;
    while(i<1000)i++;
    if(n<0){
        return -1
    }

    if(n===0){
    return 1;
    }

    return n*factorial(n-1)
}

const MemoExample = () => {
    let [count,setCount]=useState(1);
    const [name,setName]=useState("")
    //!syntax of useMemo
    //!useMemo(()=>{},[])
    const result=useMemo(()=>factorial(count),[count])
  return (
    <div>
        <h1>Memo Example</h1>
        <strong>Please check count value: {count} along with factorial value: {result}</strong>
        <hr />
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrememnt</button>
        <hr />
        <input type="text" value={name} placeholder="name" onChange={e=>setName(e.target.value)}/>
        <hr />
        <MemorizedName name={name}/>
    </div>
  )
}

export default MemoExample

const DisplayName=({name})=>{
    return <>
    {console.log("iam child component")}
    <h1>{name}</h1>
    </>
}

let MemorizedName=React.memo(DisplayName)