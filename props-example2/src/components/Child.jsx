// import React, { Component } from 'react'

import { Fragment } from "react";
import PropTypes, { string } from "prop-types";
console.log(PropTypes);

// export default class Child extends Component {
//   render() {
//     console.log(this.props.name);
//     return (
        
//       <div>
//       <p>my age is {this.props.age}</p>
//       <p>my name is {this.props.name}</p>
//       <button onClick={()=>this.props.val()}>update</button>
//       </div>
//     )
//   }
// }

const Child = (props) => {
//const Child = ({name="sachin",company,salary}) => {
    //or pass name,children in props like, const Child=({name,children})=>
    //so no need of 'props.'
   console.log(props.name);
 return (
    // <div>
    //     <h1>{props.name}</h1>
    //     <strong>{props.children}</strong>
    // </div>

    //=====================================
    // <Fragment>
    //   <hr />
    //   <h1>Iam child component</h1>
    //   <hr />
    //   {props.children}
    // </Fragment>
    //===================================

    // <div>
    //   <h1>{name || "sachin"}</h1>
    //   <h1>{company}</h1>
    //   <h1>{salary}</h1>
    //   <hr />
    // </div>

    <div>
      {props.name}
    </div>


  )
}

export default Child
//below method or can use or operator like above for everything or in a parameter we can give default values so 3 ways are there
// Child.defaultProps={
//   name:"sachin",
//   company:"BCCI",
//   salary:5000,
//}
//=================================
Child.propTypes={
  // can use PropTypes.any
  name:PropTypes.string,
  company:PropTypes.string,
  salary:PropTypes.number,
  func:PropTypes.func
}
//=============================================================================rcc

// import React, { Component, Fragment } from 'react'

// export default class Child extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.courseName}</h1>
//        <Fragment>{this.props.children}</Fragment> 
//       </div>
//     )
//   }
// }
