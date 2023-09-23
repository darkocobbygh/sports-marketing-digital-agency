import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
  return (
    <div>
      <nav className='nav'>
     <Link className='logo' to={'/'}>
        FITSIGHT
     </Link>
     <ul>
        <li>
            <Link to={'/'} className={(url === "/" ?" active" : "")} >HOME</Link>
        </li>
        <li>
            <Link to={'/about-us'} className={(url === "/about-us" ?" active" : "")}>ABOUT US</Link>
        </li>
        <li>
            <Link to={'/lets-talk'} className={(url === "/lets-talk" ?" active" : "")}>LETS TALK!</Link>
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
