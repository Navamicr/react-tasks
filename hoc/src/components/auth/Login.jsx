import React, { useState } from 'react'
import withFormHandling from '../../hoc/withFormHandling'

const Login = ({ handleChange, handleSubmit, values }) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' placeholder='enter email' value={values.email} onChange={handleChange} />
                <input type="password" name='password' placeholder='enter password' value={values.password} onChange={handleChange} />
                <input type="text" name='company' placeholder='enter company' value={values.company} onChange={handleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default withFormHandling(Login)