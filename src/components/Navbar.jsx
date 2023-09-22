import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
     <Link className='logo' to={'/'}>
        FITSIGHT
     </Link>
     <ul>
        <li>
            <Link to={'/'} >HOME</Link>
        </li>
        <li>
            <Link to={'/about-us'}>ABOUT US</Link>
        </li>
        <li>
            <Link to={'/lets-talk'}>LETS TALK!</Link>
        </li>
        <li>
            <Link>
            <FaBars></FaBars>
            </Link>
        </li>
     </ul>
      </nav>
    </div>
  )
}

export default Navbar
