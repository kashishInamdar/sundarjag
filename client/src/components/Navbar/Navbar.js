import { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "./sj-logo.png"



const Navbar = ()=>{
    const [bar , setBar] = useState("display")

    return(
        <div className="navbar flex justify-between items-end px-12 h-16 lg:justify-between">
            <Link to="/" ><img src={logo} alt="bar" className="logo" /> </Link>

            <div className={` ${bar} menu-bar  w-full flex flex-col gap-6 items-center py-2 text-lg font-bold lg:items-end `}>
                <ul className=" flex flex-col items-center gap-6 lg:flex-row lg:gap-9 " >
                    <li> <Link to="/"  className="menu" > Home</Link> </li>
                    <li> <Link to="/service" className="menu" > Service</Link> </li>
                    <li> <Link to="/plan" className="menu" > Our Plan</Link> </li>
                    <li> <Link to="/contact" className="menu" > Contact</Link> </li>
                </ul>
            </div>
            <div>
            <i className ="fa-solid fa-bars fa-lg toggel lg:display-none" onClick={()=>{ bar === "display" ? setBar("noDisplay") : setBar("display") }}></i>
            </div>
        </div>
    )
}

export default Navbar