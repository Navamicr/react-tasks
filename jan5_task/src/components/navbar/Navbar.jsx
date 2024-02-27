import { RxHamburgerMenu } from "react-icons/rx";
import { createRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  let [val, setVal] = useState(true);
  let [state, setState] = useState({
    symbol: <RxHamburgerMenu />,
    status: true
  })
  let divRef = createRef(null)
  let displayCard = () => {
    divRef.current.style.left = 0
    setState({ symbol: <RxCross1 />, status: false })

  }

  let display = () => {
    divRef.current.style.left = 0;
  }
  let removeCard = () => {
    divRef.current.style.left = "-235px"
    setState({ symbol: <RxHamburgerMenu />, status: true })
  }

  let remove = () => {
    divRef.current.style.left = "-235px"
  }
  return (
    <div>
      <header className="container">
        <div className="navbar">
          {/* <button onClick={() => { state.status === true ? displayCard() : removeCard() }}>
        
            {state.symbol}
          </button> */}

          <button onClick={() => {
            if (val === true) {
              display();
              setVal(false);
            } else {
              remove();
              setVal(true);
            }
          }}> {state.symbol}</button>

        </div>
      </header>
      <div className="sidebar" ref={divRef}>
        <ul>
          <li>
            <a href="">Alpha</a>
          </li>
          <li>
            <a href="">My Profile</a>
          </li>
          <li>
            <a href="">Employees</a>
          </li>
          <li>
            <a href="">Batches</a>
          </li>
        </ul>
      </div>5
    </div>
  );
};

export default Navbar;
