// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross1 } from "react-icons/rx";
// import Dog from "./dog";
// import Rain from "./rain";
// import Thunder from "./thunder";
// import Bird from "./Bird";

// const Menubar = () => {
//   const [isCrossIcon, setIsCrossIcon] = useState(false);

//   const handleIconClick = () => {
//     setIsCrossIcon(!isCrossIcon);
//   };

//   return (
//     <div className={`container ${isCrossIcon ? "expanded" : ""}`}>
//       <div className="sidebar">
//         <div className="menu-icon" onClick={handleIconClick}>
//           {isCrossIcon ? <RxCross1 /> : <GiHamburgerMenu />}
//         </div>
//       </div>
//       <div className="content">
//         {isCrossIcon && (
//           <div className="components">
//             <Dog />
//             <Rain />
//             <Thunder />

//             <Bird />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Menubar;

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Dog from "./dog";
import Rain from "./rain";
import Thunder from "./thunder";
import Bird from "./Bird";
import Car from "./car";
import Fire from "./fire";

const Menubar = () => {
  const [isCrossIcon, setIsCrossIcon] = useState(false);

  const handleIconClick = () => {
    setIsCrossIcon(!isCrossIcon);
  };

  return (
    <>
      <div className="navbar"></div>
      <div className={`container ${isCrossIcon ? "expanded" : ""}`}>
        <div className={`sidebar ${isCrossIcon ? "expanded" : ""}`}>
          <div className="menu-icon" onClick={handleIconClick}>
            {isCrossIcon ? <RxCross1 id="cr" /> : <GiHamburgerMenu />}
          </div>
        </div>
        <div className={`content ${isCrossIcon ? "expanded-content" : ""}`}>
          {isCrossIcon && (
            <div className="components">
              <Dog />
              <Rain />
              <Thunder />
              <Bird />

              <Car />
              <Fire />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menubar;
