import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Games } from './pages/GamesList';
import { Profile } from './pages/profile/Profile';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { GamePage } from './pages/GamePage';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';
import ProfileGames from './pages/profile/ProfileGames';
import { ProfileGameReviews } from './pages/profile/ProfileGameReviews';
import ProfileLikes from './pages/profile/ProfileLikes';
import { ProfileGamelist } from './pages/profile/ProfileGamelist';
import Friends from './pages/profile/Friends';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/footer/AboutUs';
import { Terms } from './pages/footer/Terms';
import { Contact } from './pages/footer/Contact';
import ScrollToTop from './components/ScrollToTop';
import { FriendsPage } from './pages/friends/FriendsPage';
import Reviews from './pages/Reviews';



function App() {

  const [loggedIn, SetLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  // This will be sent to backend instead of state
  // Left in during development 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (username, password) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        SetLoggedIn(true);
        setUsername(users[i].username)
        sessionStorage.setItem('username', username)
        navigate('/')
      } else {
        console.log('incorrect')
      }
    }
  }

  const handleSignup = (username, password) => {
    setUsers([...users, { username: username, password: password }])
  }

  const signOut = () => {
    SetLoggedIn(false);
    navigate('/')

  }


  return (
    <>
      
      <div className="container-fluid d-flex flex-column vh-100">
        <Header loggedIn={loggedIn} signOut={signOut} handleLogin={handleLogin} handleSignup={handleSignup} />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Landing loggedIn={loggedIn} />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GamePage />} />

          {/* This will need an :id adding on - login, keep in session and use in URL as profile  */}
          <Route path="/profile" element={<Profile 
          username={username} 
          password={password} 
          setUsername={setUsername}
          setPassword={setPassword}
          />} />
          <Route path="/profile/games" element={<ProfileGames />} />
          <Route path="/profile/reviews" element={<ProfileGameReviews />} />
          <Route path="/profile/likes" element={<ProfileLikes />} />
          <Route path="/profile/gamelist" element={<ProfileGamelist />} />
          <Route path="profile/friends" element={<Friends />} />
          <Route path="/friends/:id" element={<FriendsPage />} />
          <Route path="/reviews/:id" element={<Reviews />} />


          {/* Think will turn this into one signup/login nav - will then route inside to each page */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;