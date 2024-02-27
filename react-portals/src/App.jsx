import React, { useState } from 'react'
import Modal from './Modal'
import Login from './Login'
import Signup from './Signup'

const App = () => {
  let [toggle,setToggle]=useState(false)
  let handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <div className='main-content'>
      <button onClick={handleToggle}>{toggle? 'close':'open'}</button>

      {toggle?<Modal toggle={{toggle,handleToggle}}>
        <Signup/>
      </Modal>:''}
    </div>
  )
}

export default App