import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../css/Components.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Verifium" />
            <p> <span>V</span>erifium</p>
        </div>
        <div className="list">
        <Link  to="/">Home</Link>
        <Link to="/About">About us</Link>
        <Link to="/Guide">Guide</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar