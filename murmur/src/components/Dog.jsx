import React, { useState, useRef } from "react";
import DOG from "./dog.mp3";
import dog from "./download.jpg";
import { FaDog } from "react-icons/fa6";

const Dog = () => {
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
    <div id="dog">
      <div>
        <video src={DOG} ref={videoRef}></video>

        <button onClick={PlayOrPause}>
          <FaDog size={70} />
        </button>
      </div>
    </div>
  );
};

export default Dog;
