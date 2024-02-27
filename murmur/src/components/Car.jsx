import React, { useRef, useState } from "react";
import { AiFillCar } from "react-icons/ai";
import CAR from "./car.mp3";

const Car = () => {
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
    <div id="car">
      <div>
        <video src={CAR} ref={videoRef}></video>

        <button onClick={PlayOrPause}>
          <AiFillCar size={70} />
        </button>
      </div>
    </div>
  );
};

export default Car;
