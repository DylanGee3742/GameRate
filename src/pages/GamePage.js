import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { StarRating } from '../components/StarRating';
import { AverageRatingChart } from '../components/AverageRatingChart';

export function GamePage() {
  const { id } = useParams()
  const ratings = [2, 2, 2, 1, 3, 3, 3, 4, 5]; 


  return (
    <>
      <div className='row m-2'>
        <div className='col-7'>
          <div className='col mb-3'>
            <h1>GameTitle{id}</h1>
          </div>
          <div className='col'>
            <p>In "Echoes of Eternity," embark on an epic journey through the vast, mystical lands of Aetheria, where ancient prophecies and forgotten magic intertwine. As a brave adventurer chosen by fate, you must uncover the truth behind the mysterious disappearance of the legendary artifact known as the Orb of Eternity. Traverse treacherous landscapes, from enchanted forests to desolate ruins, each teeming with secrets and dangers.
              Engage in thrilling battles against fearsome creatures and rival factions, utilizing a dynamic combat system that combines strategy and skill. Master powerful spells and abilities, harnessing the elemental forces of fire, water, earth, and air to overcome your adversaries. Along the way, forge alliances with enigmatic allies and confront sinister foes, all while unraveling the intricate tapestry of Aetheria's history.</p>
          </div>
          <div className='col'>
            <strong>Platform</strong>
          </div>
        </div>
        <div className='col text-center'>
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Call_of_Duty_%282003%29_cover.jpg"
            className="rounded"
            alt="Game Cover" />
        </div>
      </div>

      <div className="row m-5">
        {/* This will get an average of all ratings for this film */}
        Rating
        <AverageRatingChart ratings={ratings} />
      </div>

      <div className="row m-5">
        {/* This will show all the friends that have played and rated */}
        Friends Activity
      </div>
    </>
  )
}