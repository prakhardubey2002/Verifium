import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/WalletContext';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import male from '../assets/male.png'
const User = () => {
    const { isAddress, setIsAddress } = useGlobalContext();
    return (
        <div className="user">
            <div className="profpic">
                <img src={male} alt="" />
            </div>
            <br />
            <h1>Hi {isAddress.substring(0, 12)}....   <AccessibilityNewIcon /></h1>
            <div className="User">
                <h2>New User? Add your data here first : <button><Link to={`/details/${isAddress}`} >Add User Data</Link></button></h2>
                <br />
                <h2>List your Current NFT:  <button><Link to={`/nftlist/${isAddress}`} >List NFT and Certificates</Link></button></h2>

                <br />
                <h2>Mint Credential as NFT:  <button><Link to={`/nftlist/${isAddress}`} >Mint Credential</Link></button></h2>
            </div>
        </div>
    )
}

export default User