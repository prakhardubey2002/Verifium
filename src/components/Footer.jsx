import React from 'react'
import '../css/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="first">
          <h2>Verifium</h2>
          <p>Our project offers educational organizations to have their own Digital credentials offering page to give tamper proof badges, <br/>certificates, a degree in NFT format with a verification system to verify credentials
          </p>
        </div>
        <div className="links">
          <h2>Useful link</h2>
          <ul>
            {/* <li>Facebook</li>
            <li>Instagram</li> */}
            <li>Linkdln <LinkedInIcon/></li>
            <li>Github <GitHubIcon/></li>
          </ul>
        </div>
        <div className="newseletter">
          <h2>Subscribe</h2>
          <input type="text" placeholder='Email' />
        </div>
      </div><br /><br />
      <div className="lower">
        <p>

      Copyright © 2023 verifium All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer