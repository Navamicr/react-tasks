import React, { useState, useRef } from "react";

const Player = ({ selectedVideo }) => {
  let [toggle, setToggle] = useState(true);
  let videoRef = useRef();

  let HandleVideoControls = () => {
    setToggle(!toggle);

    if (toggle === true) {
      videoRef.current.play();
      videoRef.current.autoPlay = true;
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div>
      <video src={selectedVideo} ref={videoRef} autoPlay></video>
      <button onClick={HandleVideoControls}>{toggle ? "play" : "pause"}</button>
    </div>
  );
};

export default Player;
