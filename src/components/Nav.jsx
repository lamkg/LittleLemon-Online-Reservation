import React, { useState } from "react";
import logo from '../assets/Logo.svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        /* apply styles using a ternary operator  */
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
          <li>
            <a href="/" role='button'>Home</a>
          </li>
          <li>
            <a href="/" role='button'>About</a>
          </li>
          <li>
            <a href="/" role='button'>Services</a>
          </li>
          <li>
            <a href="/" role='button'>Menu</a>
          </li>
          <li>
            <a href="/" role='button'>Reservations</a>
          </li>
          <li>
            <a href="/booking" role='button'>Order Online</a>
          </li>
          <li>
            <a href="/" role='button'>Login</a>
          </li>
        </ul>
      </nav>
    )
}

export default Nav;