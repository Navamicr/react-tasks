import React from 'react'

const Player = props => {
    let {link,imgURL,name}=props.data
    // let {handleClick}=props.handleClick
    

  return (
   
      /* <video src={props.link} controls></video> */
      /* event handler below: */
        <div>
          <h1>{name}</h1>
        <figure>
          <picture>
            <img src={imgURL} alt="photo" onClick={()=>props.handleClick(link)}/>
          </picture>
        </figure>
        </div>
        
     
   
  )
}

export default Player