import React from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
   
    <div>
    <footer id='footer' className='site-footer'>
      <div className='wrapper'>
        <div className='footer-content'>
          <div className='logo'>
            <img src="/logo-malex.png" alt="Logo" />
          </div>
          <div className='cw'>
          <p id='copywrite'>© 2024 Business Consulting Agency React JS Template By Adveits</p>
          </div>
          <div className='icons'>
          <div className='ln'>
             <span id='ln'><GrLinkedinOption /></span>
          </div>
          <div className='fb'>
             <span id='fb'><FaFacebook /></span>
          </div>
          </div>
          
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer