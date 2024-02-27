import React from 'react'

const Signup = ({children}) => {
  return (
    <div>
      <hr />
       <h1>{children}</h1>
        <form >
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input type="text" placeholder='username' />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" placeholder='password' />
            </div>
            <div className="form-group">
              <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Signup