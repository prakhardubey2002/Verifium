import React from 'react'

const Login = () => {
  return (
    <div className="login">

      <div className="login-box">
        <form>
          <div className="user-box">
            <input required="" name="" type="text" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="password" />
            <label>Password</label>
          </div>
          <center>
            <a href="#">
              SEND
              <span />
            </a>
          </center>
        </form>
      </div>
    </div>

  )
}

export default Login