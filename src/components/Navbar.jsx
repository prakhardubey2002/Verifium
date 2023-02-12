import React, { useState } from 'react'
import { PhantomButton } from 'wallet-connect-buttons';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../css/Components.css'
import { useGlobalContext } from '../Context/WalletContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const { isAddress,setIsAddress } = useGlobalContext();
    // const [publicKey, setPublicKey] = useState('');
    const [isVisible, setVisibility] = useState(true);

    const toggleVisibility = () => {
        setVisibility(!isVisible);
        toast("Wallet connected")
    }
    const tos = () => {
        toast(`Hi ${isAddress.substring(0, 17)}... `)
    }
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
                {isVisible ?
                    <div className="box" onClick={toggleVisibility} >
                        <PhantomButton borderRadius="2rem" backgroundColor="#fff" color="black" setPublicKey={setIsAddress} />
                    </div>
                    :
                    <div className="key-box" onClick={tos}  >
                        {/* {publicKey.substring(0, 7)}... */}
                        {isAddress.substring(0, 7)}...
                    </div>
                }
                {/* {!isVisible && <Navigate to="/Details" replace={true} />} */}
            </div>
            
        </div>
        
    )
}

export default Navbar