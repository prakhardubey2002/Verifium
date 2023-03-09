import React, { useState } from 'react'
import '../css/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { toast } from 'react-toastify';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const Submit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const formData = {
      feedback,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    const response = await fetch('http://localhost:3000/ali/createfeedback', options);
    const data = await response.json();
    toast(`Feedback added Succesfully `);
    console.log(data);
    setFeedback("")
  };
  return (
    <div className="footer">
      <div className="upper">
        <div className="first">
          <h2>Verifium</h2>
          <p>Our project offers educational organizations to have their own Digital credentials offering page to give tamper proof badges, <br />certificates, a degree in NFT format with a verification system to verify credentials
          </p>
        </div>
        <div className="links">
          <h2>Useful link</h2>
          <ul>
            {/* <li>Facebook</li>
            <li>Instagram</li> */}
            {/* <Link to=""></Link> */}
            <a target="_blank" href="https://www.linkedin.com/in/prakhar-dubey-3790b81b7/">
            <li>Linkdln <LinkedInIcon /></li>
            </a>
            <li>Github <GitHubIcon /></li>
          </ul>
        </div>
        <div className="newseletter">
          <h2>Feedback</h2>
          <div className="finp">

          <input type="text" placeholder='Feedback' value={feedback} onChange={(e)=>{setFeedback(e.target.value)}} />
          <ArrowForwardIcon className='icon'  onClick={(e)=>Submit(e)}  />
          
          </div>
        </div>
      </div><br /><br />
      <div className="lower">
        <p>

          Copyright © 2023 verifium All rights reserved.
        </p>
        <br />
        <p>

         Made by Prakhar Dubey with <FavoriteIcon className='icon'/>
        </p>
      </div>
    </div>
  )
}

export default Footer