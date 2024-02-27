import React, { useRef, useState } from "react";
import { BsFire } from "react-icons/bs";
import FIRE from "./fire.mp3";

const Fire = () => {
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
    <div id="fire">
      <div>
        <video src={FIRE} ref={videoRef}></video>

        <button onClick={PlayOrPause}>
          <BsFire size={65} />
        </button>
      </div>
    </div>
  );
};

export default Fire;
