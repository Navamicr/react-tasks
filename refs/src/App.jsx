// import React,{createRef} from 'react'

// const App = () => {
//  let usernameRef=createRef();
//  let passwordRef=createRef();

//  let getDataFromForm=(e)=>{
//   e.preventDefault();
//   let username=usernameRef.current.value;
//   let password=passwordRef.current.value;
//   console.log({username,password});
//  }
//   return (
//     <div>
//       <form>
//         <input type="text" id='username' placeholder='username' ref={usernameRef} />
//         <input type="password" id='password' placeholder='password' ref={passwordRef} />
//         <button onClick={getDataFromForm}>Submit</button>
//       </form>

//     </div>
//   )
// }

// export default App
//========================================================REF2(useRef)

// import React, {useRef} from 'react'

// const App = () => {
//   const inputRef=useRef();

//   let changeInput=()=>{
//     inputRef.current.placeholder="enter some text";
//     inputRef.current.style.background="#efefef"
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} onClick={changeInput} />
//     </div>
//   )
// }

// export default App
//======================================================================REF2
// import React from 'react'
// import Video from './components/videos/video'

// const App = () => {
//   return (
//     <div>
//       <Video/>
//     </div>
//   )
// }

// export default App
//====================================================REF2

import React, { useState } from "react";
import JSON from "./video.json";
import VideoContainer from "./components/VideoComponents/VideoContainer";

const App = () => {
  let [state, setState] = useState(JSON);
  let [selectedVideo, setSelectedVideo] = useState(state[0].contentUrl);

  let handleClick = (item) => {
    return setSelectedVideo(item.contentUrl);
  };

  return (
    <VideoContainer
      state={state}
      selectedVideo={selectedVideo}
      handleClick={handleClick}
    />
  );
};

export default App;
