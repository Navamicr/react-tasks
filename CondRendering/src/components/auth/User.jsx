import React, { Fragment } from 'react'

const User = ({id,name,salary,company,role,age}) => {
 switch(role){
    case 'admin':
        return (
        <section style={{background:"#eee",color:"#333",padding:10}}>
            <h1>ADMIN PANEL</h1>
            <h1>{name}</h1>
            <p>{role}</p>
        </section>
        )
        case 'user':
            return (
            <section style={{background:"#111",color:"#fff",padding:20}}>
                <h1>USER PANEL</h1>
                <h1>{name}</h1>
                <p>{role}</p>
            </section>
            )    
        default:
            return <section style={{background:'fff',color:'blue'}}>
                <h1>DEFAULT PANEL</h1>
                no user found
            </section>    
 }
  
}

export default User