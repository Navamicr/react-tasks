import React from 'react'

const Login = (props) => {
  return (
    <div>
        <h1>{props.children}</h1>
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

export default Login