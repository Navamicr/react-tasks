//Events 1
//--------------

// import React from 'react'

// const App = () => {
//   const handleEventsInReact=()=>{
//     alert("Hello navami")
//   }
//   const handleSubmit=(e)=>{
//     console.log(e);//syntheticBase event
//     e.preventDefault();//you must call preventDefault explicitly to prevent browser default(ie refreshing)
//     console.log("hello React")
//   }
//   return (
//     <div>
//       {/* <h1>Hello</h1>
//       <button onClick={handleEventsInReact}>click</button> */}

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='name' />
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//===================================================================================================

//Events 2
//----------------

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//         count:0
//     }
//     //we have to bind this keyword becoz here no bound function,so do as below or can give inside setState ie inline binding
//     this.Increment=this.Increment.bind(this)
//   }
//   // Increment(){
//   //   this.setState({count:this.state.count+1});
//   // }
//   Increment=()=>{
//     this.setState({count:this.state.count+1});
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         {/* below is the traditional binding */}
//         <button onClick={this.Increment}>Increment</button>
//         {/* below is an example for inline binding */}
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
//         {/* or by using arrow fn after Increment method ,this is preffered */}
//         <button onClick={()=>this.setState(this.Increment)}>Increment</button>
//       </div>
//     )
//   }
// }
//increment with: constructor bind,inline arrow fn,inline bind,arrow fn

//==================================================================================================

//Events 3
//-----------

// import React from 'react'

// const App = () => {
//   let CustomEvent=()=>{
//     let  yantra =new Event("yClick");
//     let body=document.body;
//     console.log(body);
//     body.addEventListener("yClick",e=>{
//       e.target.style.background="red"
//     })
//     body.dispatchEvent(yantra)
    
//   }
//   return (
//     <div>
//       <h1>Custom event in React</h1>
//       <button onClick={CustomEvent}>Trigger Custom Event</button>
//     </div>
//   )
// }

// export default App

//===================================================================================================rafce
 //Events 3
 //----------

//  import {useState} from 'react'
 
//  const App = () => {
//   let[isShow,isSetShow]=useState(false);
//    return (
//      <div>
//       <button
//         onMouseEnter={()=>isSetShow(true)}
//         onMouseLeave={()=>isSetShow(false)}
//         >
//          Hover on me
//       </button>
//       {isShow && <div>It will show..</div>}
//      </div>
//    )
//  }
 
//  export default App
//================================================================================
//Events 3
//------------

// import {useState} from 'react'

// const App = () => {
//   let ChangeBgColor=e=>{
//      e.target.style.background="purple"
//      e.target.style.width="100%"
//      e.target.style.color="white"
//   }
//   return (
//     <div>
//       <button onMouseOver={ChangeBgColor}>hover me</button>
//     </div>
//   )
// }

// export default App

//==================================================================================
//Event 3 (multiple function in one click)
//-----------
// import React from 'react'

// const App = () => {
//   let show=()=>{
//     console.log('iam show');
//   }
//   let showOneMoreTime=()=>{
//     console.log('one more time show');
//   }
//   let showTyLogo=()=>{
//     console.log('LOGO');
//   }
//   let showMenu=()=>{
//     console.log('show menu');
//   }
//   return (
//     <div>
//        <button onClick={()=>{show(),showOneMoreTime(),showTyLogo(),showMenu()}}>Multiple Click</button>
//     </div>
//   )
// }

// export default App

//============================================================================
//Event 4
//---------

// import React from 'react'
// import AudioComp from './components/AudioComp'
// import link1 from './components/file_example_MP4_480_1_5MG.mp4'
// import link2 from './components/sample-5s.mp4'


// const App = () => {
//   const audioArr=[{
//     name:"globe",
//     link:link1,
//     imgURL:"https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_640.jpg"
    
//   },{
//     name:"city",
//     link:link2,
//     imgURL:"https://www.geospatialworld.net/wp-content/uploads/2023/09/Images-Artha15.jpg"
//   }
// ];
//   return (
//     <div>
//       <AudioComp audioArr={audioArr}/>
//     </div>
//   )
// }

// export default App

//=====================================================================
// Event 5 (onTest as a prop ie named event handler as a prop)
// -----------

// import React from 'react'
// import Button from "./components/Button"

// const App = () => {
//   return (
//     <div>
//   <button onClick={()=>alert("hello shahsi")}>Click me</button>
//   <span onClick={()=>alert("hello shahsi")}>Click me with span Tag</span>
//   <Button onTest={()=>alert('hello naming event handler')}>Play Audio</Button>
//   <Button onTest={()=>alert('hello naming handle props...')}>Play Video</Button>
//   </div>
//   )
// }

// export default App

//======================================================================
//Event 6(stop propagation),bubbling phase-child to grandparent
//-----------

// import React from 'react'

// const App = () => {
//   return (
//     <section className='section' onClick={((e)=>{
//       e.stopPropagation();
//       console.log('Grand parent event has been triggered')
//     }
//     )}>
//      GRANDPARENT 
//      <div className='div' onClick={((e)=>{
//       e.stopPropagation();
//       console.log('Parent block triggered')
//      }
//       )}>
//       PARENT 
//       <button className='btn' onClick={((e)=>{
//         e.stopPropagation();
//         console.log('child event has been triggered')
//         })}>
//       Child
//       </button>

//      </div>
//     </section>

       
    
//   )
// }

// export default App
//=============================================================
//Event 6 (capturing phase(grand parent to child))
//-----------

// import React from 'react'

// const App = () => {
//   return (
//     <section className='section' onClickCapture={((e)=>{
//      // e.stopPropagation();
//       console.log('Grand parent event has been triggered')
//     }
//     )}>
//      GRANDPARENT 
//      <div className='div' onClickCapture={((e)=>{
//       //e.stopPropagation();
//       console.log('Parent block triggered')
//      }
//       )}>
//       PARENT 
//       <button className='btn' onClickCapture={((e)=>{
//        // e.stopPropagation();
//         console.log('child event has been triggered')
//         })}>
//       Child
//       </button>

//      </div>
//     </section>

       
    
//   )
// }
// export default App

//===============================================================
//Event 6 (forms)
//---------------

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         e.preventDefault();
//         console.log('hello form')}}>
//         <input type="text" />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
//==================================================================
//Event 6(keyboard events)
//----------

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let [state,setState]=useState("")
//   let handlekeyboardEvent=(e)=>{
//   //  console.log(e);
//   //  if(e.keyCode===13)
//   //  {
//   //   console.log(`you have pressed ${e.keyCode} KEY`);
//   //  }
//   if(e.key==='y'){
//     console.log('you pressed y');
//     setState(e.key )
//   }
//   else if(e.key ==='n'){
//     console.log('you pressed n');
//     setState(e.key)
//   }
//   else{
//   console.log('some other key');
//   setState(e.key )
//   }
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <input type="text" placeholder='type any key' 
//       value={state}
//       //onKeyPress={handlekeyboardEvent}
//       //onKeyDown={handlekeyboardEvent}
//       onKeyUp={handlekeyboardEvent}
//       />
//     </div>
//   )
// }

// export default App

