import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import GamesFiltered from '../../components/GamesFiltered';
import { GameReview } from '../../components/GameReview';
import EditDetail from '../../components/EditDetail';


export function Profile({ username, password, setUsername, setPassword }) {
  const storedUsername = sessionStorage.getItem('username');
  return (
    <>
      <div className="container">

        {/* Profile Header */}
        <div className='row align-items-end'>
          <div className="col-2 d-flex">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              className="img-fluid p-0 m-0 rounded-circle"
              alt="Game Cover" />
          </div>
          <div className="col d-flex" >
            <h1>{storedUsername}</h1>
          </div>
          <div className="col d-flex">
          <EditDetail 
          username={username} 
          password={password}
          setUsername={setUsername}
          setPassword={setPassword} />
          </div>
          <div className="col-1 d-flex flex-column">
            <p className='p-0 m-0'><strong>124</strong></p>
            <p className='p-0 m-0'>Games</p>
          </div>
          <div className="col-1 d-flex flex-column">
          <p className='p-0 m-0'><strong>87</strong></p>
            <p className='p-0 m-0'>Followers</p>
          </div>
          <div className="col-1 d-flex flex-column">
          <p className='p-0 m-0'><strong>68</strong></p>
            <p className='p-0 m-0'>Following</p>
          </div>
        </div>
        <hr />

        {/* Recent Likes */}
        <div className='row'>
          <GamesFiltered filter={"Recent Likes"} filterTitle={"Recent Likes"} showRating={true} liked={true} />
        </div>
        <hr />

        {/* Recent Reviews */}
        <GameReview />
      </div>
    </>
  )
}
