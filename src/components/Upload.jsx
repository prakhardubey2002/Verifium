import React from 'react'
import './Upload.css'
export default function Upload() {
  return (
    <div className='UploadPage'>

    <h1>Create NFT</h1>

        <form action="">

            <div>
                <label htmlFor="fname">First Name</label><br />
                <input id='fname' type="text" />
            </div>

            <div>
                <label htmlFor="lname">Last Name</label><br />
                <input id='lname' type="text" />
            </div>
        
            
    
        <div>
            <label htmlFor="lname">Enrollment No.</label><br />
            <input id='eno' type="text" />
        </div>
        <div>
            <label htmlFor="cid">Certificate id</label><br />
            <input id='cid' type="text" />
        </div>
        </form>

        <p>OR</p>

        <div>
            <label htmlFor="uploadImage">Upload your local certificate</label>
            <input id='uploadImage' type="file" />
            <br />
            <br />
            <button>Create NFT</button>
        </div>
    </div>
  )
}
