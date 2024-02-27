// import React, { useState } from 'react'
// import ClassBasedComp from './components/ClassBasedComp'
// import EffectHookExample from './hooks/EffectHookExample'

// const App = () => {
//   let [count, setCount] = useState(0)
//   return (
//     <div>
//       <ClassBasedComp />
//       <hr />
//       {count < 5 && <EffectHookExample counter={{ count, setCount }} />}
//     </div>
//   )
// }

// export default App
//======================================useEffect2
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [width, setWidth] = useState(window.innerWidth)

//   const updateWidth = () => {
//     setWidth(window.innerWidth)
//   }



//   useEffect(() => {
//     window.addEventListener("resize", updateWidth)

//     //remove event listner
//     //cleanup fn// remove from the event stack
//     return () => {
//       window.removeEventListener("resize", updateWidth)
//     }
//   }, [width])

//   useEffect(() => {
//     if (width > 600) {
//       window.document.body.style.background = "green"
//     }
//     else {
//       window.document.body.style.background = "red"
//     }
//   }, [width])


//   return (
//     <div>App</div>
//   )
// }

// export default App

//=====================================================

import { Fragment, useEffect, useState } from 'react'

import axios from 'axios'

const App = () => {
  let [products, setProducts] = useState(null)

  let fetchProducts = async () => {
    // let data = await window.fetch("https://api.escuelajs.co/api/v1/products");


    //by using axios---------------------------------------------------------------------
    let { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
    setProducts(data)
    //---------------------------------------------------------------------------------

    // console.log(data)
    // let finalProduct = await data.json();
    // console.log(finalProduct)
    // setProducts(finalProduct)
  }
  useEffect(() => { fetchProducts() }, [])
  return (
    <aside className='flex-container'>
      {
        products === null ? "loading" : products.map(product => (
          <div className='container' key={product.id}>
            <img src={product.images[0]} alt={product.title} height={200} width={200} />
            <h2>{product.title}</h2>
          </div>))
      }
    </aside>
  )
}

export default App