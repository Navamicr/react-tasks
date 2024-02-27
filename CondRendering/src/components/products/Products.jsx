// import React, { Fragment } from 'react'
// import Item from "./Item"

// const Products = ({state}) => {
 //----------------------------------   
//    if(!state){
//     return <h1>loading...</h1>
//    }
//    if(!state.length){
//     return <p>Sorry, the product is Empty</p>
//    }
//    else{
//     return <ul>
//     {state.map(product =>{
//         return(
//         <Fragment key={product.id}>
//             <Item key={product.id}{...product}/>
//         </Fragment>
//     )
//     })}
//    </ul>
   ///}
   //------------------------------------
   //above code, here by using ternary operator

//    return <Fragment>
//     {
//         !state? <h1>loading...</h1> : !state.length ? <p>Sorry, the product is Empty </p>:(
//              <ul>
//      {state.map(product =>{
//          return(
//          <Fragment key={product.id}>
//              <Item key={product.id}{...product}/>
//          </Fragment>
//      )
//      })}
//     </ul>
        
//    ) }
//    </Fragment>
// }

// export default Products

//==========================================================================
//CR2(4eg)
import React from 'react'

const Products = () => {
  return (
    <div>Products</div>
  )
}

export default Products
