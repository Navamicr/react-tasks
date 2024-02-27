import React, { Fragment } from 'react'
import Player from './Player';

const AudioComp = ({audioArr}) => {
    // console.log(audioArr);
    let handleClick=(val)=>{
      const audio=new Audio(val);
      audio.play();
    }
  return (
    <article className='container'>
        {
            audioArr.map((audio,index)=>{
              return(
                <Fragment key={index+1}>
                  <Player key={index+1} data={audio} handleClick={handleClick}/>
                </Fragment>
              )
            })
        }
    </article>
  )
}

export default AudioComp