import "./Navbar.css"
import { Link } from "react-router-dom"
import idevifyLogo from './../../assests/idevifysolutions.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to=""> <img src={idevifyLogo} className="idevifylogo  mx-5" /> </Link>

                    <div className="collapse navbar-collapse d-flex justify-content-center  fs-5" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item me-5">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>

                            <li className="nav-item dropdown me-5">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">Web Development</Link></li>
                                    <li><Link className="dropdown-item" to="#">
                                        Android Development</Link></li>
                                    <li><Link className="dropdown-item" to="#">Business Development</Link></li>
                                    <li><Link className="dropdown-item" to="#">
                                        Digital Marketing</Link></li>
                                    <li><Link className="dropdown-item" to="#">
                                        UI / UX Designing</Link></li>
                                    <li><Link className="dropdown-item" to="#">Software Training</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="#">Career</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="#">About</Link>
                            </li>

                        </ul>
                    </div>

                    <div className="">
                    <button className="btn btn-info text-white">Login</button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar