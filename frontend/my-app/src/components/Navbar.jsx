import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <h1>Navbar</h1>
    <nav>
        <div className="navbar">
            <div className='logo'><a href="#">Arafath</a></div>
            <div className="nav-links">

            <div className="sidebar-logo">
                <span className="logo_name">Arafath</span>
                <i className='bx bx-x'></i>
                </div>

                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a>
                    <i className='bx bxs-chevron-down arrow service-arrow'></i>
                    <ul className="service-sub-menu sub-menu">
                        <li><a href="#">Vollenter</a></li>
                        <li><a href="#">Transport</a></li>
                    </ul>
                    
                    </li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar