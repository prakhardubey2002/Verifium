import React, { useState } from 'react'
import { PhantomButton } from 'wallet-connect-buttons';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../css/Components.css'
const Navbar = () => {
  const [publicKey, setPublicKey] = useState('');
  const [isVisible, setVisibility] = useState(true);
  const [direct, setDirect] = useState(false);
  // useState(()=>{
  //   if(isVisible===false){
  //     <Navigate to="/Details" replace={true} />
  //   }
  // },[isVisible])
  // const appv=() => {
  //   setVisibility(false);
  //   {
  //     <Navigate to="/Details" />
  //   }
  // }
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Verifium" />
        <p> <span>V</span>erifium</p>
      </div>
      <div className="list">
        <Link to="/">Home</Link>
        <Link to="/About">About us</Link>
        <Link to="/Guide">Guide</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        {/* {
          isVisible &&
          <div className="box" onClick={() => setVisibility(false)} >
            <PhantomButton setPublicKey={setPublicKey} />

          </div>
        } */}
        {
          isVisible ? <div className="box" onClick={() => setVisibility(false)} >
            <PhantomButton setPublicKey={setPublicKey} />

          </div> : <div className="key-box"  >
            {publicKey.substring(0, 7)}...
          </div>
        }
         {isVisible===false && (
          <Navigate to="/Details" replace={true} />
        )}
      </div>
    </div>
  )
}

export default Navbar