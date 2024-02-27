import React from 'react'
import Info from './info'

const Notification = ({state}) => {

    // console.log(text,status);
   
  return (
    <div>
      {
        state.map((data,index)=>{
            return <Info key={index+1}{...data}/>
        })
      }
    </div>
  )
}

export default Notification