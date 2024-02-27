import React, { useState } from 'react'
import PageOne from './FormOutput';

const Form = ({ BatchCode, course, Date, Time, trainer, handleChange, handleSubmit }) => {

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="course"></label>
                    <input type="text" className='fg' placeholder='Course' name='course' required value={course} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="trainer"></label>
                    <input type="text" className='fg' placeholder='Trainer' name='trainer' required value={trainer} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="BatchCode"></label>
                    <input type="text" className='fg' placeholder='BatchCode' name='BatchCode' required value={BatchCode} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="Date"></label>
                    <input type="date" className='fg' placeholder='' name='Date' required value={Date} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="Time"></label>
                    <input type="time" className='fg' placeholder='' name='Time' required value={Time} onChange={handleChange} />
                </div>

                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form