import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Verifium" />
        </div>
        <div className="list">
            <Link  />
        </div>
    </div>
  )
}

export default Navbar