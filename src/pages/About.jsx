import React from 'react'
import art from '../assets/art.png'
import flow from '../assets/flow.png'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import acblockchain from "../assets/92445-crypto-bitcoin.json"
import Lottie from "lottie-react"
const About = () => {
  return (
    <div className="about">
      <div className="boxl">
        <h2>What is Verifium?</h2>
        <br />
        <p>Verifium is hybrid Decentralised synchronised architecture in simple term certain amount of data is saved on blockchain(Solana) and certain amount of dat is saved of servers(alibaba Polardb)</p>
        <br />
        <br />
        <br />
        <br />
        <h2>What we do? <QuestionAnswerIcon className='iconx' /> </h2>
        <br />
        <p>
          This is Secure Credential offering Project. This project enables the organizations to issue tamper-proof badges, certificates, and degrees in the form of non-fungible tokens (NFTs). These digital credentials are backed by a robust verification system(Integrated as Telegram Bot) that allows employers and other institutions to easily verify the authenticity of the credentials. By using our platform, educational organizations can offer their students a secure and reliable way to showcase their achievements and credentials, while also making it easier for employers and other institutions to verify the credentials of their potential hires.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h2>But what is NFT? <EmojiObjectsIcon className='iconx' /></h2>
        <br />
        <p>
          NFT stands for "Non-Fungible Token". It is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content, such as artwork, music, or other types of digital media. NFTs are unique and cannot be replicated or divided into smaller parts, unlike fungible assets such as cryptocurrencies. NFTs are stored on a blockchain, which provides a decentralized and secure way to verify ownership and authenticity. The use of NFTs has gained popularity in recent years, particularly in the art world, where they allow creators to sell unique digital art and collectors to prove ownership of the original digital artwork.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h2>How does all this work at once?</h2>
        <br />
        <p>Below Flowchart explain our Hybrid Decentralised synchronised architecture with solana telegram </p>
        <div className="imgboxl">

        <img className='imgl' src={flow} alt="" />
        
        </div>
      </div>
      <div className="boxr">
        {/* <img src={art} alt="pic" />
         */}
         <Lottie className='art' animationData={acblockchain} loop={true} />
      </div>
    </div>
  )
}

export default About