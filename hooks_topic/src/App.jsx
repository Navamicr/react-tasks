// //! hooks are js fns
// //! only call hooks at the top level
// //! dont call hooks inside loops, conditions or nested function

// //! dont call hooks from regular js fns..instead you can call:
// //? call hooks from the react fns component
// //? call hooks from custom hooks
 //create or use hooks starts with ---use---

// function App() {
  

//   return (
//     <>
//      <div>
//       <h1>Hello</h1>
//      </div>
//     </>
//   )
// }

// export default App
//-------------------------------------useReducer

//useReducer is the alternative to the useState hook whenever have complex state
//useState=>basic state object go with useState
//the contextApi with useReducer is the best option to create complex state logic in react application
//for state management like redux,recoil,mobx useReducer is the best option compare to useState

// import React from 'react'
// import { useReducer } from 'react'

// let intialState={
//   name:"navami",
//   company:"fireflink",
//   salary:100000,
// };

// const App = () => {
//   let [state,dispatch]=useReducer(()=>{},intialState);
//   return (
//     <div>
//       <h1>{state.name}</h1>
//     </div>
//   )
// }

// export default App
//----------------------------------------
import React from 'react'
import { useReducer } from 'react';

let intialState={
  count:0,
}
let reducer=(state,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return{
        count:state.count+1,
      };
      case 'DECREMENT':
      return{
        count:state.count-1,
      };
      case 'RESET':
        return{
          count:0,
        };
      default:
        return state;
  }
}
const App = () => {
  let [state,dispatch]=useReducer(reducer,intialState);
   return (
     <div>
       <h1>{state.count}</h1>
       <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
       <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
       <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
     </div>
   )
}

export default App

