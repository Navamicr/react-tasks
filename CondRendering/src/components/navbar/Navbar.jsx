//CR1
//------

// import React, { Fragment } from 'react'

// const Navbar = (props) => {
//     let {isLoggedIn,isSetLoggedIn}=props.data

//     let changeState=()=>{
//         isSetLoggedIn(false)
//     }

//     if(isLoggedIn===true){
//         return(
//             <Fragment>
//                  <section id='navbar'>
//     <article className='container'>
//         <div className="logoBlock">LOGO</div>
//         <div className="menuBlock">
//             <ul>
//                 <li>
//                     <a href="">Home</a>
//                 </li>
//                 <li>
//                     <a href="">Services</a>
//                 </li>
//                 <li>
//                     <button onClick={changeState}>Logout</button>
//                 </li>
                
//             </ul>
//         </div>
//     </article>

//   </section>
                
//             </Fragment>
//         )
//     }
//     else{
//         return(
//             <Fragment>
//                   <section id='navbar'>
//     <article className='container'>
//         <div className="logoBlock">LOGO</div>
//         <div className="menuBlock">
//             <ul>
//                 <li>
//                     <a href="">Home</a>
//                 </li>
//                 <li>
//                     <a href="">Services</a>
//                 </li>
//                 <li>
//                     <a href="">Login</a>
//                 </li>
//                 <li>
//                     <a href="">Register</a>
//                 </li>
                
//             </ul>
//         </div>
//     </article>

//   </section>

               
//             </Fragment>
//         )
//     }




  
// }

// export default Navbar

//=================================================
//CR1 (one more way to use if, eg)
//----------------

// import React, { Fragment } from 'react'

// const Navbar = ({data:{isLoggedIn,isSetLoggedIn}}) => {
//  if(!isLoggedIn){
//     return( 
//     <Fragment>
//           <li>
//             <a href="">Login</a>
//           </li>
//           <li>
//             <a href="">Register</a>
//           </li>
//     </Fragment>
//     )
//  }
//  return <Fragment>
//     <li>
//         <button onClick={()=>isSetLoggedIn(false)}>Logout</button>
//     </li>
//  </Fragment>
// }

// export default Navbar
//============================================================

//CR2 (component rendering) in ternery way
//------

import React, { Fragment } from 'react'

const Navbar = ({data:{isLoggedIn,isSetLoggedIn}}) => {
    const IsAuthenticated=()=>{
        return <Fragment>
            <li>
                <button onClick={()=>isSetLoggedIn(false)}>LOGOUT</button>
            </li>
        </Fragment>
    };
    const IsAnonymousUser=()=>{
        return <Fragment>
            <li>
                <a href="">Login</a>
            </li>
            <li>
                <a href="">Register</a>
            </li>
        </Fragment>
    };
  return (
    <section id='navbar'>
        <article className='container'>
            <div className="logoBlock">LOGO</div>
            <div className="menuBlock">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    {isLoggedIn===true ? <IsAuthenticated/>: <IsAnonymousUser/>}
                </ul>
            </div>
        </article>
    </section>
  )
}

export default Navbar