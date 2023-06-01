import React from 'react'
import male from '../assets/male.png'
import { useGlobalContext } from '../Context/WalletContext';
import '../css/Adx.css'
const Adx = () => {
    const { isAddress, setIsAddress } = useGlobalContext();
    return (
        <div className="adx">

           
        </div>
    )
}

export default Adx