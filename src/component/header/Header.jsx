import React, { useState } from 'react'
import { IoListOutline } from "react-icons/io5"
import './Header.css'
import { Link } from 'react-router-dom'




export const Header = () => {
    
         const [sidebar,setSidebar]=useState(false)
  return (
    <>
        
      <div className="navbar fixed z-50">
        <div className="logo">N-shopping</div>
        <div className="nav">
                            <Link to="/" className="tags">Home</Link>
                            <Link to="/about" className="tags">About</Link>
                            <Link to="#" className="tags">Contact us</Link>
                            <Link to="/login" className="tags">Login</Link>
                            <Link to="/services" className="tags">Service</Link>
                        </div>
                        <div className="navline" onClick={()=>{setSidebar(!sidebar)}}>
                         <Link to="#" ><IoListOutline /></Link>
                        </div>
        </div> 
        {/* section side bar */}
          
                <div className={sidebar ? "sidebar2" :"sidebar "}>
                     {/* <div className="sidebarContainer"> */}
                          <Link to="/" className="sidetags">Home</Link>
                          <Link to="/about" className="sidetags">About</Link>
                          <Link to="#" className="sidetags">Contact us</Link>
                          <Link to="/login" className="sidetags">Login</Link>
                          <Link to="/services" className="sidetags">Service</Link>
                    {/* </div> */}
                </div>
         
    </>
  )
}
