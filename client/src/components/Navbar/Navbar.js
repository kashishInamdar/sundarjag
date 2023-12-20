import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu from "./menu.png"
import idevifyLogo from "./../../assests/idevifysolutions.png"

import Aos from "aos" // scroling animmation library 
import "aos/dist/aos.css"


function Navbar() {
  const[menuBtn , setMenuBtn] = useState("disply") 

  useEffect(() => {
    Aos.init()
  }, [])

  return ( 
    <div data-aos="fade-down" className='nav-container'>
      <Link className="navbar-brand" to=""> <img src={idevifyLogo} className="idevifylogo  " /> </Link>
      <img src={menu} alt="menu" className='menu-btn'
      onClick={()=>{
        setMenuBtn(menuBtn === "disply" ? "-" : "disply")
      }}
      />
      <div className={`${menuBtn}`}>

        <Link to="/blog" className='nav-btn' >Blog</Link>
        <Link to="/contact" className='nav-btn'> Contact</Link>
        <Link to="/faq" className='nav-btn'>FAQ</Link>
        
      </div>


    </div>
  )
}

export default Navbar