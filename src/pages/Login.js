import React, { useState } from 'react';

export const Login = ({ handleLogin, signOut }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Call handleLogin with username and password
    handleLogin(username, password);

    // Reset form fields
    setUsername("");
    setPassword("");
  }

  // Make into a pop up
  return (
    <>
      <span role="button" className="pe-auto col nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">
        Login
      </span>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModallLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            <form id="loginForm" className="form-inline" onSubmit={handleSubmit}>
              <input className="form-control mr-sm-2 mb-3" 
              id="usernameLogin" 
              type="text" 
              placeholder="Username" 
              aria-label="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              <input className="form-control mr-sm-2 mb-3" 
              id="passwordLogin" 
              type="password" 
              placeholder="Password"
              aria-label="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               />
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Login</button>
            </form>

            </div>
            <div className="modal-footer">
              <p>Footer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}