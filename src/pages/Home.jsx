import React from 'react'
// import blockchain from "../assets/Blockchain.json"
import blockchain from "../assets/65395-blockchain-animation-2.json"
import Lottie from "lottie-react"
import Button from '../components/Button'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context/WalletContext';
const Home = () => {
  const { isAddress } = useGlobalContext();

  const notification = () => {
    if (isAddress !== "user") {
      console.log("User Connected Succesfully")
    } else {
      toast(`Connect wallet beforehand to explore ${isAddress}`)
    }
  }
  return (
    <div className="home">
      {/* <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className="left">

        <div className="heading">
          <h2>Fast and Effcient way to generate Degree,certificate and badges </h2>
          {/* <h3>On your Figertip in couple of seconds</h3><br /> */}
          <h4>With security of blockchain</h4>
        </div>
        <div className="content">
          <br />
          <p>
            Our project offers educational organizations to have their own Digital credentials offering page to give tamper proof badges, certificates, a degree in NFT format with a verification system to verify credentials
          </p>
          <br />
        </div >
        {/* <button>
          Register
        </button> */}<br />
        <div onClick={notification} >
          {isAddress !== "user" ? (
            <NavLink key={isAddress} to={`user/${isAddress}`}>
              <Button word={"Explore"} />
            </NavLink>
          ) : (
            <Button word={"Explore"} disabled />
          )}
        </div>
      </div>
      <div className="right">
        <div className="card">

          <Lottie className='art' animationData={blockchain} loop={true} />
        </div>
      </div>
    </div>
  )
}

export default Home