import React from 'react'

function WriteUs() {
  return (
    <div>
        <section className='main'>
            <h1>You Can Write Us</h1>
            <p className='writeus-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> When an unknown printer took a galley.</p>
            <div className='form-div'>
               <form action="">
                <div className='form-group'>
                   <input type="text" className='fg-control' placeholder='Name'/>
                </div>
                <div className='form-group'>
                   <input type="text" className='fg-control' placeholder='Email'/>
                </div>
                <div className='form-group'>
                   <textarea name="message"className='fg-control' id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <div className='form-group'>
                   <button type='submit' className='btn'>Send Message</button>
                </div>
               </form>
            </div>


        </section>
    </div>
  )
}

export default WriteUs