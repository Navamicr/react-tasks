import React from 'react'
import { useState } from 'react'

const App = () => {
    let[companies,Setcomp]=useState([{
        company_id:1,
        company_name:"AMAZON",
        company_type:"Product Based We support more than 220,000 employees across Europe who are innovating",
        company_employees:30000,
        company_opening:true,
        company_url:"https://www.commercialdesignindia.com/public/images/2020/08/17/Amazon-building2.jpg"
    },{
        company_id:2,
        company_name:"TCS",
        company_type:"Service Based We support more than 220,000 employees across Europe who are innovating",
        company_employees:10000,
        company_opening:false,
        company_url:"https://media.istockphoto.com/id/1143615463/photo/tata-consultancy-services-logo-on-their-office-for-ottawa-ontario-part-of-tata-group-this.jpg?s=612x612&w=0&k=20&c=4EWGhBDxfjyFE1juKY5CgU9iNuuYnzswipnAZ7F47Mw="
    },{
        company_id:3,
        company_name:"GOOGLE",
        company_type:"Product Based We support more than 220,000 employees across Europe who are innovating",
        company_employees:50000,
        company_opening:true,
        company_url:"https://timesnext.com/content/images/wp-content/uploads/2020/09/title_google.jpg"
    },{
        company_id:4,
        company_name:"Apple",
        company_type:"Product Based We support more than 220,000 employees across Europe who are innovating",
        company_employees:20000,
        company_opening:false,
        company_url:"https://mixmag.net/assets/uploads/images/_columns2/Apple-building.jpg"
    }
])
  return (
    
        
    
    <div className='main-container'>
       {
        companies.map((company)=>{
            return(
                company.company_opening ? (
                    <div style={{backgroundImage:`url(${company.company_url})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                      <div className='open' key={company.id}>
                        <div className='intro-open'>
                           <h3>{company.company_name}</h3>
                           <p className='type'>{company.company_type}</p>
                           <p className='emp'>No.of Employees: {company.company_employees}</p>
                           
                           </div>   

                      </div>
                    </div>
                 ):(
                    <div style={{backgroundImage:`url(${company.company_url})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                     <div className='close' key={company.id}>
                        <div className='intro-close'>
                           <h3>{company.company_name}</h3>
                           <p className='type'>{company.company_type}</p>
                           <p className='emp'>No.of Employees: {company.company_employees}</p>
                           
                           </div>
                     </div>
         
                    </div>
                 )
            )
        })
        
       }
    </div>
    
    
    
  )
}

export default App