import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import './Navbar.css';
import Dropdown from './Dropdown'
const Navbar = () => {

  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

  return (
    <>
    <nav className='navbar'>
      <Link to='/'className='navbar-logo'>EPIC</Link>

      <div className='menu-icon'onClick={handleClick}>
        <i className={click ? 'fas fa-times': 'fas fas-bars'}/>
      </div>

    </nav>

    </>
  )
}

export default Navbar