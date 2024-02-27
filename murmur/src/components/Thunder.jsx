import React, { useState, useRef } from "react";
import THUNDER from "./thunder.mp3";
import thunder from "./thunder.avif";
import { IoIosThunderstorm } from "react-icons/io";

const Thunder = () => {
  let [play, setPlay] = useState(true);
  let videoRef = useRef();
  let PlayOrPause = () => {
    setPlay(!play);

    if (play === true) {
      videoRef.current.play();
      // setContent('pause')
    } else {
      videoRef.current.pause();
      // setContent('play')
    }
  };
  return (
    <div id="thunder">
      <div>
        <video src={THUNDER} ref={videoRef}></video>

        <button onClick={PlayOrPause}>
          <IoIosThunderstorm size={77} />
        </button>
      </div>
    </div>
  );
};

export default Thunder;
