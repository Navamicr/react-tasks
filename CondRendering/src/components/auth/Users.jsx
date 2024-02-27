import React, { Fragment } from 'react'
import User from './User'

const Users = ({state}) => {
    if(!state){
        return <h1>Loading..</h1>
    }
    if(!state.length){
        return <h1>Sorry no user found</h1>
    }
    else{
        return <Fragment>
        {
            state.map(data=>{
                return <Fragment key={data.id}>
                    <User key={data.id}{...data}/>
                </Fragment>
            })
        }
    </Fragment>
    }
  
}

export default Users