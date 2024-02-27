import React, { useState,useRef } from 'react'
import VIDEO from './video.mp4'

const Video = () => {
    let [play,setPlay]=useState(true);
    // let [content,setContent]=useState("play");
    let videoRef=useRef();

    let PlayOrPause=()=>{
        setPlay(!play);

        if(play===true){
            videoRef.current.play();
            // setContent('pause')
        }
        else{
            videoRef.current.pause();
            // setContent('play')
        }
    }
  return (
    <section id='videoBlock'>
        <article>
            <video src={VIDEO} ref={videoRef}></video>
            <button onClick={PlayOrPause}>{play? "play":"pause"}</button>
            {/* <button>pause</button> */}
        </article>

    </section>
  )
}

export default Video