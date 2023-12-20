import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu from "./menu.png"
import idevifyLogo from "./../../assests/idevifysolutions.png"


function Navbar() {
    const [userdata, setUserdata] = useState({});
    const [menuBtn, setMenuBtn] = useState("disply")

    useEffect(() => {
        const userFromlocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
        setUserdata(userFromlocalStorage);
    }, [])

    return (
        <div className='nav-container'>
            <Link className="navbar-brand" to=""> <img src={idevifyLogo} className="idevifylogo  mx-5" /> </Link>
            {/* <Link to='/'className='logo1' > <span className='logoname'>Book Bus</span></Link> */}
            <img src={menu} alt="menu" className='menu-btn'
                onClick={() => {
                    setMenuBtn(menuBtn === "disply" ? "-" : "disply")
                }}
            />
            <div className={`${menuBtn}`}>
                {/* <Link to="/orders" className='nav-btn'>My Orders</Link> */}

                <Link to="/blog" className='nav-btn' >Blog</Link>
                <Link to="/contact" className='nav-btn'> Contact</Link>
                <Link to="/faq" className='nav-btn'>FAQ</Link>
                <Link to="/signup" className='nav-btn'>Signup</Link>
                <Link to="/login" className='nav-btn'>Login</Link>

            </div>

            {/* <div className={`user ${menuBtn}`}>
        Hay!😊{userdata.name}

        {
          userdata?.name? (<button className='btn-logout'
          onClick={()=>{
            localStorage.removeItem("user");
            window.location.href = "/login"
          }}
          >Logout</button>) : null
        }
      </div> */}

        </div>
    )
}

export default Navbar