 import React, { Component, Fragment } from 'react'
 //import Child from './components/Child'
import Login from './components/Login'
import Signup from './components/Signup'
import Child from './components/child'

//import Child from "./components/child"


// export default class App extends Component {
//     state={
//         count:0,
//     };
//     Increment=()=>{
//         this.setState({count:this.state.count+1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}FROM PARENT</h1>
//         <Child name="blacky" age={4} val={this.Increment}/>
//       </div>
//     )
//   }
// }
//====================================================================rafce


const App = () => {
  return (
     <div>
        {/* <Child name="Beth">
          <h3>iam beth</h3>
        </Child>
        <Child name="carl">
          <h3>iamcarl</h3>
        </Child>
        <Child name="daryl">
          <h3>iam daryl</h3>
        </Child>
        <Child name="lori">
          <h3>iam lori</h3>
        </Child> */}
{/* ========================= */}


{/* <Fragment>
    <Child>
      <Login>Iam login page</Login>
      <Signup>Iam signup page</Signup>
      </Child>
</Fragment> */}
{/* ========================================== */}


<Child name={1} company="google" salary={500000}/> 
{/* will get warning if name={1} is given since we have provided proptypes for name as string */}
<Child name="mary" company="qspiders" salary={7000} func={()=>console.log("hello")}/>
<Child name="carol" company="amazon" salary={50000}/>
<Child name="david" company="soti" />






    </div>
   // =================================









  )
}

export default App
//==================================================================================rcc

// import React, { Component } from 'react'
// import Child from './components/child'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child courseName="mernstack">
//             <ul>
//                 <li>html</li>
//                 <li>css</li>
//                 <li>js</li>
//                 <li>react</li>
//             </ul>
//         </Child>
//         <Child courseName="javaFullstack">
//             <ul>
//                 <li>java</li>
//                 <li>spring</li>
//                 <li>js</li>
//                 <li>react</li>
//             </ul>
//         </Child>
//         <Child courseName="pythonFullstack">
//             <ul>
//                 <li>python</li>
//                 <li>django</li>
//                 <li>js</li>
//                 <li>react</li>
//             </ul>
//         </Child>
//       </div>
//     )
//   }
// }
