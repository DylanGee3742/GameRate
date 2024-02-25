import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Games } from './pages/GamesList';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { GamePage } from './pages/GamePage';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';


function App() {
  const [loggedIn, SetLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] =useState([]);
  // const [username, setUsername] = useState("");
  


  const handleLogin = (username, password) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        SetLoggedIn(true);
        // setUsername(users[i].username)
        sessionStorage.setItem('username', username)
        navigate('/')
      } else {
        console.log('incorrect')
      }
    }
  }

  const handleSignup = (username, password) => {
    setUsers([...users, {username: username, password: password}])
  }

  const signOut = () => {
    SetLoggedIn(false);
    navigate('/')
 
  }

  return (
    <>
    <div  className="container-fluid d-flex flex-column vh-100 overflow-auto">
    <Header loggedIn={loggedIn} signOut={signOut} handleLogin={handleLogin} handleSignup={handleSignup} />

    <Routes>
      <Route path="/" element={<Landing loggedIn={loggedIn} />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/:id" element={<GamePage />} />

    {/* This will need an :id adding on - login, keep in session and use in URL as profile  */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />

    {/* Think will turn this into one signup/login nav - will then route inside to each page */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
    </div>
    </>
  );
}

export default App;