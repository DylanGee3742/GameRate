import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

export function Header({ loggedIn, signOut, handleLogin, handleSignup, username }) {
    const storedUsername = sessionStorage.getItem('username');

    return (
        <div className="container-fluid">
            <div className="row align-items-center p-2 mb-5 justify-content-center" style={{ borderBottom: "2px solid black" }}>

                <div className="col-5">
                    <h1>GameRate</h1>
                </div>

                <div className="col d-flex justify-content-end align-items-center">
                    <nav className="navbar navbar-expand navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="col nav-link" to="/games">Games</NavLink>
                                </li>
                                {loggedIn ? <li className="nav-item">
                                    <div class="dropdown">
                                        <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {storedUsername}
                                        </div>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/profilegames">Games</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/profilereviews">Reviews</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/profilegamelist">Gamelist</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/profilelikes">Likes</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/friends">Friends</NavLink></li>
                                            <li><a class="dropdown-item" onClick={signOut}>Sign Out</a></li>
                                        </ul>
                                    </div>
                                </li> : <><li className="nav-item">
                                    <Login handleLogin={handleLogin} />
                                </li>
                                    <li className="nav-item">
                                        <SignUp handleSignup={handleSignup} />
                                    </li> </>}
                            </ul>
                            <form className="form-inline col">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </nav>
                </div>

            </div>

        </div>

    )
}