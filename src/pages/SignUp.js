import React, { useState } from 'react'

export function SignUp({ handleSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    handleSignup(username, password);

    setUsername("");
    setPassword("");
  }


  return (
    <>
  <span role="button" className="pe-auto col nav-link" data-bs-toggle="modal" data-bs-target="#signUpModal">
        Sign Up
      </span>

      <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModallLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signUpModalLabel">Sign Up</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            <form id="signupForm" className="form-inline" onSubmit={handleSubmit}>
              <input className="form-control mr-sm-2 mb-3" 
              id="usernameSignup" type="text" 
              placeholder="Username" 
              aria-label="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              <input className="form-control mr-sm-2 mb-3" 
              id="passwordSignup" type="password" 
              placeholder="Password"
              aria-label="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               />
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Sign Up</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
