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
                <h2>New User? Add your data here first :<Link to={`/details/${isAddress}`} > <button>Add User Data</button></Link></h2>
                <br />
                <h2>List your Current NFT: <Link to={`/nftlist/${isAddress}`} > <button>List NFT and Certificates</button></Link></h2>

                <br />
                <h2>Mint Credential as NFT: <Link to={`/nftlist/${isAddress}`} > <button>Mint Credential</button></Link></h2>
            </div>
        </div>
    )
}

export default User