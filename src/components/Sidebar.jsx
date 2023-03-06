import React from 'react'
import Lottie from "lottie-react"
import Layer from "../assets/Layer.json"
import about from "../assets/about.json"
import admin from "../assets/admin.json"
import feedback from "../assets/feedback.json"
import Home from "../assets/Home.json"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/WalletContext';
const Sidebar = () => {
    const { isAddress, setIsAddress } = useGlobalContext();
    return (
        <div className="sidebar">
            <div className="main">
                <ul>
                    <li><Link to="/">
                        <Lottie className='articon' animationData={Home} loop={1} pause={true} />
                        <p>Home </p>
                    </Link>
                    </li>
                    <li>  <Link to="/About">
                        <Lottie className='articon' animationData={about}   pause={true} loop={1}  />
                        <p>About us</p>
                    </Link>
                    </li>
                    <li><Link to="/admin">
                        <Lottie className='articon' animationData={admin}  loop={1} pause={true} />
                        <p>Admin</p>
                    </Link>
                    </li>
                    <li><Link to="/feedback">
                        <Lottie className='articon' animationData={feedback} loop={1} pause={true} />
                        <p>Feedback</p>
                    </Link>
                    </li>
                    <li><Link to={`MintNft/${isAddress}`}>
                        <Lottie className='articon' animationData={Layer} autoplay={false} loop={true} pause={true} />
                        <p>List NFT</p>
                    </Link>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
        
    )
}

export default Sidebar