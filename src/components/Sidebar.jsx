import React from 'react'
import Lottie from "lottie-react"
import Layer from "../assets/Layer.json"
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="main">
                <ul>
                    <li><Link to="/">
                        <Lottie className='articon' animationData={Layer}  />
                        <p>Home </p>
                    </Link>
                    </li>
                    <li><Link to="/">
                        <Lottie className='articon' animationData={Layer} autoplay={false} loop={true} pause={true} />
                        <p>Home</p>
                    </Link>
                    </li>
                    <li><Link to="/">
                        <Lottie className='articon' animationData={Layer} autoplay={false} loop={true} pause={true} />
                        <p>Home</p>
                    </Link>
                    </li>
                    <li><Link to="/">
                        <Lottie className='articon' animationData={Layer} autoplay={false} loop={true} pause={true} />
                        <p>Home</p>
                    </Link>
                    </li>
                    <li><Link to="/">
                        <Lottie className='articon' animationData={Layer} autoplay={false} loop={true} pause={true} />
                        <p>Home</p>
                    </Link>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
        
    )
}

export default Sidebar