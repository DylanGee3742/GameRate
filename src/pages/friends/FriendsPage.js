import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import GamesFiltered from '../../components/GamesFiltered';
import { GameReview } from '../../components/GameReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as plus, faCheck as check } from '@fortawesome/free-solid-svg-icons';
import '../../styles/GamePage.css';

export function FriendsPage() {
  // This page will fetch to friends database to find all data needed
  const [following, setFollowing] = useState(false)
  const { id } = useParams()


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
            <h1>Friend {id}</h1>
          </div>
          <div className="col-1 d-flex flex-column">

            {following ? <div className='col text-center'>
              <div className='row d-flex justify-content-center'>Following</div>
              <button
                onClick={() => setFollowing(!following)}
                className='buttonStyle'
              >
                <FontAwesomeIcon icon={check} style={{color: 'green'}}/>
              </button>
            </div>
              :
              <div className='col text-center flex-column'>
                <div className='row d-flex justify-content-center'>Follow</div>
                <button
                  onClick={() => setFollowing(!following)}
                  className='buttonStyle'
                >
                  <FontAwesomeIcon icon={plus} style={{color: 'blue'}}/>
                </button>
              </div>
            }
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
          <GamesFiltered filter={"Recent Likes"} filterTitle={"Recent Likes"} />
        </div>
        <hr />

        {/* Recent Reviews */}
        <GameReview />
      </div>
    </>
  )
}