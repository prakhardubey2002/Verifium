import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/WalletContext';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import male from '../assets/male.png'
import nftcard from "../assets/mincard.json"
import nftlist from "../assets/nftlist.json"
import certdata from "../assets/certdata.json"
import data from "../assets/data.json"
import Lottie from "lottie-react"
const User = () => {
    const { isAddress, setIsAddress } = useGlobalContext();
    return (
        <div className="user">
            <div className="profpic">
                <img src={male} alt="" />
            </div>
            <br />
            <h1>Hi {isAddress.substring(0, 12)}....   <AccessibilityNewIcon /></h1>
            {/* <div className="User">
                <h2>New User? Add your data here first :<Link to={`/details/${isAddress}`} > <button>Add User Data</button></Link></h2>
                <br />
                <h2>List your Current NFT: <Link to={`/nftlist/${isAddress}`} > <button>List NFT and Certificates</button></Link></h2>

                <br />
                <h2>Mint Credential as NFT: <Link to={`/MintNft/${isAddress}`}> <button>Mint Credential</button></Link></h2>
            </div> */}
            <div className="funKcard">
                <Link to={`/details/${isAddress}`} >
                    <div class="card">
                        <div class="card-image">
                            <Lottie animationData={data} loop={true} />
                        </div>
                        <div class="category"> New User?Add Data </div>
                        <div class="heading"> New User Must Register before using portal
                            <div class="author"> <span class="name">Category : </span> Data</div>
                        </div>
                    </div>
                </Link>
                <Link to={`/nftlist/${isAddress}`} >

                    <div class="card">
                        <div class="card-image">
                            <Lottie animationData={nftlist} loop={true} />
                        </div>
                        <div class="category"> See wallet NFTs </div>
                        <div class="heading">See all your minted credentails and NFTs
                            <div class="author"> <span class="name">Category : </span> NFT</div>
                        </div>
                    </div>
                </Link>
                <Link to={`/MintNft/${isAddress}`}>
                    <div class="card">
                        <div class="card-image"><Lottie animationData={nftcard} loop={true} /></div>
                        <div class="category"> MinT Credentials NFT </div>
                        <div class="heading"> Mint  credentails in NFT format
                            <div class="author"> <span class="name">Category : </span> NFT</div>
                        </div>
                    </div>
                </Link>
                <Link to={`/NFTData/${isAddress}`}>
                    <div class="card">
                        <div class="card-image"><Lottie animationData={certdata} loop={true} /></div>
                        <div class="category"> Credentails's Data and NFT Metadata </div>
                        <div class="heading"> Add credentails Data before minting
                            <div class="author"> <span class="name">Category : </span> Data</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default User