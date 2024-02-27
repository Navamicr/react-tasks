import React from 'react'
import withFormHandling from '../../hoc/FormHandlingWithHoc'

const Register = ({ values, handleChange, handleSubmit }) => {
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" value={values.email} name="email" placeholder='enter email' onChange={handleChange} />
                <input type="password" value={values.password} name="password" placeholder='enter password' onChange={handleChange} />
                <input type="text" value={values.company} name="company" placeholder='enter company' onChange={handleChange} />
                <button>submit</button>
            </form>

        </div>
    )
}

export default withFormHandling(Register)