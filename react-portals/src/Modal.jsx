import ReactDOM from 'react-dom'
console.log(ReactDOM)

const Modal = ({toggle:{toggle,handleToggle},children}) => {
  return ReactDOM.createPortal(
    <section id='modal-container'>
    {children}
    </section>,
      
    
    document.getElementById("modal")
  )
}

export default Modal