import React, { useState, useRef } from "react";
import RAIN from "./rain.mp3";
import { FaCloudRain } from "react-icons/fa";
import rain from "./rain.avif";

const Rain = () => {
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
    <div id="rain">
      <div>
        <video src={RAIN} ref={videoRef}></video>

        <button onClick={PlayOrPause}>
          <FaCloudRain size={70} />
        </button>
      </div>
    </div>
  );
};

export default Rain;
