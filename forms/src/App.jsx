//===========================================FORMS1
//uncontrolled component
// for the elements have to add ref attribute

//import React, { useRef } from "react"

// const App = () => {
//   let emailRef = useRef("");
//   let passwordRef=useRef("")

//   let handleSubmit=e=>{
//     e.preventDefault();
//     let email=emailRef.current.value
//     let password=passwordRef.current.value
//     console.log({email,password})
//   }
//   return (
//     <section id="form">
//       <article>
//         <h2>login</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email">email</label>
//             <input type="text" placeholder="email" id="email" ref={emailRef} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">email</label>
//             <input type="password" placeholder="password" id="password" ref={passwordRef}/>
//           </div>
//           <div className="form-group">
//             <button onClick={handleSubmit}>login</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   )
// }

// export default App
//==============================================================================================FORMS1
// import React,{useState} from 'react'
 //CONTRLLED COMPONENT:
//  //!initialize state object
//  //!add value attribute to the input or form elements
//  //! state mutation add onChange event to the elements

// const App = () => {
//   let [email,setEmail]=useState("")
//   let [password,setPassword]=useState("")
//   let handleSubmit=e=>{
//     e.preventDefault();
//     console.log({email,password})
//   }
//   return (
//     <div>
//       <h2>login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
//         <input type="password" placeholder='enter password' value={password } onChange={(e)=>setPassword(e.target.value)} />
//         <button>login</button>
//       </form>
//     </div>
//   )
// }

// export default App
//================================================================================================FORMS2

// import React,{useState} from 'react'

// const App = () => {
//   let[state,setState]=useState({
//     email:"",
//     password:"",
//     loading:false,
    
//   })
//   let handleChange=(e)=>{
//     let {name,value}=e.target
//     //we have to merge state
//     setState({...state,[name]:value})
//   }
//   let handleSubmit=e=>{
//     e.preventDefault();
//     console.log({email,password})
//   }
//   let{email,password,loading}=state;

//   let x={name:"navami"}
//   let y={company:"testyantra"}
  

//   // let mergeTheseValue=Object.assign(x,y)
//   //or
//   // let mergeTheseValueWithSpread={...x,...y}
//   // console.log(mergeTheseValue)
//   // console.log(mergeTheseValueWithSpread)


//   return (
//     <div>
//       <h1>login</h1>
//       {/* form>div.form-group*3>label{email}+input */}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">email</label>
//           <input type="email" value={email} name='email' placeholder='email'id='email' onChange={handleChange} />
//           </div>
//         <div className="form-group">
//           <label htmlFor="password">password</label>
//           <input type="password" value={password} name='password'placeholder='password' id='password' onChange={handleChange} />
//           </div>
//         <div className="form-group">
//           <button>{loading? 'loading':'submit'}</button>
          
//           </div>
//       </form>

//     </div>
//   )
// }

// export default App
//=======================================================================================FORMS 3&4
import React,{Fragment, useState} from 'react'
import COUNTRY from './country.json'

let countries=COUNTRY;

const App = () => {
  let [state,setState]=useState({
    title:"",
    comment:"",
    gender:"",
    js_lib:"",
    country:"",
    price_range:0,
    date:"",
    time:"",
    theme_color:"",
    loading:false
  })
  let [skills,setSkills]=useState("")
  
  let {title,comment,loading,gender,js_lib,country,price_range,date,time,theme_color}=state

  let handleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value});
  }

  // let handleCountryChange=e=>{
  //   let {name,value}=e.target;
  //   setCountries([...e.target.value]);
  // }

  let handleCheckbox=(e)=>{
    let {value}=e.target
    if(e.target.checked){
    setSkills((oldChecked)=>{
      return[...oldChecked,value]
    })
  }
  else{
    setSkills(oldChecked=>{
      return oldChecked
    })
  }
  }

  let handleSubmit=e=>{
    e.preventDefault()
    //once we submit we have to clear those values
    try {
      console.log({...state,skills,country})
      setState({loading:false,title:"",comment:""})
    } catch (error) {
      console.log(error)
    } finally{
      setState({title:"",comment:""})
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id='title' value={title} onChange={handleChange} placeholder='enter title' />
        </div>

        <div className="form-group" name="gender" value={gender} onChange={handleChange}>
          <label htmlFor="gender">Select Gender</label>
          <input type="radio" name='gender'value="male" />
           Male
          <input type="radio" name='gender'value="female" />
           Female
          <input type="radio" name='gender'value="others" />
           others
        </div>

        <div className="form-group" name="skills" value={skills} onChange={handleCheckbox}> 
          <label htmlFor="skills">Select Skills</label>
          <input type="checkbox" name="skills" id="skills" value="javascript"/>JavaScript
          <input type="checkbox" name="skills" id="skills" value="java"/>Java
          <input type="checkbox" name="skills" id="skills" value="Node js"/>Node js
          <input type="checkbox" name="skills" id="skills" value="React"/>React
        </div>

        <div className="form-group" >
          <label htmlFor="Choose Javascript libraries">
          Choose Javascript libraries
          </label>
          <select name="js_lib" value={js_lib} onChange={handleChange}>
            <option value=""></option>
            <option value="react">React</option>
            <option value="momentjs">Momentjs</option>
            <option value="jquery">Jquery</option>
          </select>
        </div>

        {/* //country Block */}

        <div className="form-group">
          <label htmlFor="countries">Select Country</label>
          <select name="country" id="countries" value={country} onChange={handleChange}>
            {
              countries.map(country=>{
                return <Fragment key={country.code}>
                  <option value={country.code}>
                    <Fragment>
                      <span>
                        <picture>
                          <img src={country.flag} alt={country.code} />
                        </picture>
                      </span>
                      <span>{country.country}</span>
                    </Fragment>
                  </option>
                </Fragment>
              })
            }
          </select>
        </div>

        {/* Price range */}
        <div className="form-group">
          <label htmlFor="price_range">Price range</label>
          <span>{price_range.length > 0 && price_range}</span>
          <input type="range" name="price_range" id='price_range' min={0} max={100} value={price_range} onChange={handleChange} />
        </div>

        {/* DATE OBJECT */}
        <div className="form-group">
          <label htmlFor="date">Select date</label>
          <input type="date" name='date' id='date' value={date} onChange={handleChange}/>
        </div>

        {/* TIME OBJECT */}
        <div className="form-group">
          <label htmlFor="time">Select time</label>
          <input type="time" name='time' id='time' value={time} onChange={handleChange}/>
        </div>

        {/* COLOR OBJECT */}
        <div className="form-group">
          <label htmlFor="time">Select theme color</label>
          <input type="color" name='theme_color' id='color' value={theme_color} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Write your comments</label>
          <textarea name="comment" id="comments" value={comment} onChange={handleChange} cols="30" rows="10"></textarea>
        </div>

        <div className="form-group">
          <button disabled={!state.title && !state.comment ? true:false}>
            {loading? 'loading':'submit'}
          </button>

        </div>
      </form>
    </div>
  )
}

export default App