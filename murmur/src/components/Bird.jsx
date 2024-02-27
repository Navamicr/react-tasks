import React, { useRef, useState } from "react";
import { PiBirdFill } from "react-icons/pi";
import BIRD from "./bird.mp3";

const Bird = () => {
  let [play, setPlay] = useState(true);
  let videoRef = useRef();
  let PlayOrPause = () => {
    if (play === true) {
      videoRef.current.play();
      // setContent('pause')
    } else {
      videoRef.current.pause();
      // setContent('play')
    }
    setPlay(!play);
  };
  return (
    <div id="bird">
      <div>
        <video src={BIRD} ref={videoRef}></video>

        <button onClick={PlayOrPause}>
          <PiBirdFill size={70} />
        </button>
      </div>
    </div>
  );
};

export default Bird;
