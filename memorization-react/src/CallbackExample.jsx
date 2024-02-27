import React, { useCallback, useEffect, useState } from 'react'

const CallbackExample = () => {
    let [count,setCount]=useState(0);

    let updateCount=useCallback(()=>
    {
        let x="shahsi"
        let setValue=window.localStorage.setItem("add-to-cart-count",count)
        let getValue=window.localStorage.getItem("add-to-cart-count")
        console.log(getValue);
        return {getValue,setValue};
    },[count])
        
    //!useMemo returns value...value cannot invoke
    //! useCallback returns function so function is invoking


    let fetchUser=useCallback(async()=>{
        let data=await window.fetch("https://api.github.com/users")
        let finalValue=await data.json();
        console.log(finalValue)
    },[])
    useEffect(()=>{
        // console.log(updateCount());
        console.log(fetchUser())
        fetchUser()
        updateCount();
        console.log(count);
    },[count,updateCount,fetchUser]);
  return (
    <div>
        <h1>CallbackExample</h1>
        <p>ADD TO CART: {count}</p>
        <button onClick={()=>setCount(count+1)}>add To cart</button>
    </div>
  )
}

export default CallbackExample