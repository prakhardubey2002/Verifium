import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/WalletContext';

const User = () => {
    const { isAddress, setIsAddress } = useGlobalContext();
  return (
    <div className="user">
        <div className="User">
        <h2>New User? add yor data : <button><Link to={`/details/${isAddress}`} >Add Data</Link></button></h2>

        </div>
    </div>
  )
}

export default User