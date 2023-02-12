import React, { useState } from 'react'
import { useGlobalContext } from '../Context/WalletContext';
import male from '../assets/male.png'
import female from '../assets/female.jpg'
const Details = () => {
  const { isAddress } = useGlobalContext();
  const [gen, setgen] = useState("male");
  const [Name, setName] = useState("");
  const [insitutename, setinsitutename] = useState("");
  const Submit = (e) => {
    // e.preventdefault();
    const blog ={Name,insitutename,gen};
    console.log(blog);
    console.log("done");
    // setIsPending(true);
    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    }).then(() =>{
        console.log("new blog added");
        // setIsPending(false);
    })
  }
  return (
    <div className="Details">
      <div className="login-box">
        <label >Hi! {isAddress.substring(0, 17)}... </label>
        <div className="profpic">
          {gen == "male" ? <img src={male} alt="" /> : <img src={female} alt="" />}
        </div>
        <form >
          <br />
          <br />
          <div className="user-box">
            <input required="" name="" type="text" value={Name} onChange={(e) => setName(e.target.value)} />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="text" value={insitutename} onChange={(e) => setinsitutename(e.target.value)} />
            <label>Institution Name</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="text" />
            <label>Course Specialisation</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="text" />
            <label>Feedback</label>
          </div>
          <div className='newinput'>
            <label >Enter your Gender</label><br />
            <input onClick={() => setgen("male")} type="radio" id="Male" name="Gender" value="Male" />
            <label htmlFor="Male">Male</label><br />
            <input onClick={() => setgen("Female")} type="radio" id="Female" name="Gender" value="Female" />
            <label htmlFor="Female">Female</label><br />
          </div>

          <center>
            <a onClick={()=>Submit()} >
              SEND
              <span />
            </a>
          </center>
        </form>
      </div>
    </div>
  )
}

export default Details