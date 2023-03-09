import React, { useState } from 'react'
import { useGlobalContext } from '../Context/WalletContext';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from 'react-toastify';

const NftData = () => {
  const { isAddress } = useGlobalContext();
  const [gen, setgen] = useState("male");
  const [Name, setName] = useState("");
  const [insitutename, setinsitutename] = useState("");
  const [course, setCourse] = useState("");
  const [feedback, setFeedback] = useState("");
  const [cert,SetCert]=useState("");
  const [certid,SetCertid]=useState("");
  const [id,SetId]=useState("");

  const Submit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const formData = {
      id,
      Name,
      insitutename,
      course,
      cert,
      certid
    };
  
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
  
    const response = await fetch('http://localhost:3000/ali/addNftData', options);
    const data = await response.json();
     toast(`Created ${data.message} `);
    console.log(data);
  };

  
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  
  return (<>



    <div className="Details">
      
      <br />
      <div className="login-box">
      <button onClick={goBack} >
          <ArrowBackIcon />
          Go Back
      </button>
        <br />
        <br />
        <label >Hi! {isAddress.substring(0, 20)}... </label>
        {/* <div className="profpic">
          {gen === "male" ? <img src={male} alt="" /> : <img src={female} alt="" />}
        </div> */}
        <form >
          <br />
          <br />
          <div className="user-box">
            <input required="" name="" type="text" value={id} onChange={(e) => SetId(e.target.value)} />
            <label>Id (Numeric)</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="text" value={Name} onChange={(e) => setName(e.target.value)} />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="text" value={insitutename} onChange={(e) => setinsitutename(e.target.value)} />
            <label>Issuer Institution Name</label>
          </div>
          <div className="user-box">
            <input required="" name="" value={course} onChange={(e)=>setCourse(e.target.value)} type="text" />
            <label>Course Specialisation</label>
          </div>
          <div className="user-box">
            <input required="" name="" value={cert} onChange={(e)=>SetCert(e.target.value)} type="text" />
            <label>Certificate/Badge/Degree</label>
          </div>
          <div className="user-box">
            <input required="" name="" value={certid} onChange={(e)=>SetCertid(e.target.value)} type="text" />
            <label>Certificate/Badge/Degree issuer id(Alphanumeric)</label>
          </div>
          {/* <div className='newinput'>
            <label >Enter your Gender</label><br />
            <input onClick={() => setgen("male")} type="radio" id="Male" name="Gender" value="Male" />
            <label htmlFor="Male">Male</label><br />
            <input onClick={() => setgen("Female")} type="radio" id="Female" name="Gender" value="Female" />
            <label htmlFor="Female">Female</label><br />
          </div> */}

          <center>
            <a onClick={(e) => Submit(e)} >
              SEND
              <span />
            </a>
          </center>
        </form>
      </div>
    </div>
  </>
  )
}

export default NftData