import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus as plus } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


export function GamePage() {
  const { id } = useParams()
  const buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    cursor: 'pointer',
    /* Add any additional custom styles here */
  };

  const videoStyle = {
    width: '100%',
    maxWidth: '800px',
    maxHeight: '400px'
  }

  const coverStyle = {
    height: '100%'
  }

  return (
    <>
      {/* Title, rating, add to list, rate */}
      {/* If screen size shrinks then move out rating, add to list, rate to below cover */}
      <div className='row m-2 align-items-center'>
        <div className='col-lg-7'>
          <h2>Game Title {id}</h2>
        </div>
        <div className='col text-center'>
          <p className="p-0 m-0"><strong>User Rating</strong></p>
          <span className="d-inline-flex"><p className="p-0 m-0"><strong>8.0/10</strong></p><FontAwesomeIcon icon={solidStar} className="m-1" style={{ color: 'gold' }} /></span>
        </div>
        <div className='col text-center'>
          <p className="p-0 m-0"><strong>Rate</strong></p>
          <span className="d-inline-flex"><button style={buttonStyle} ><FontAwesomeIcon icon={regularStar} className="m-1" /></button></span>
        </div>
        <div className='col text-center'>
          <p className="p-0 m-0"><strong>Add to List</strong></p>
          <span className="d-inline-flex"><button style={buttonStyle} ><FontAwesomeIcon icon={plus} className="m-1" /></button></span>
        </div>
      </div>

      {/* Cover, videos */}
      <div className='row m-2'>
        <div className='col d-flex align-items-center mt-4'>
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Call_of_Duty_%282003%29_cover.jpg"
            className="img-fluid m-1"
            style={coverStyle}
            alt="Game Cover" />
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Call_of_Duty_%282003%29_cover.jpg"
            className="img-fluid p-0 m-0"
            style={videoStyle}
            alt="Game Cover" />
        </div>
      </div>

      {/* Categories, platforms */}
      <div className='row m-3'>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item" ><strong>Action</strong></li>
          <li className="list-group-item" ><strong>Shooter</strong></li>
          <li className="list-group-item" ><strong>RPG</strong></li>
          <li className="list-group-item" ><strong>Playstation 5</strong></li>
        </ul>
      </div>

      {/* description */}
      <div className='row m-3'>
      <p>In "Echoes of Eternity," embark on an epic journey through the vast, mystical lands of Aetheria, where ancient prophecies and forgotten magic intertwine. As a brave adventurer chosen by fate, you must uncover the truth behind the mysterious disappearance of the legendary artifact known as the Orb of Eternity. Traverse treacherous landscapes, from enchanted forests to desolate ruins, each teeming with secrets and dangers.
              </p>
      </div>

      {/* Friend Activity */}

      {/* Artwork, cast etc whatever can get */}
    </>
  )
}