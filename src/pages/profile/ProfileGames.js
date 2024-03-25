import React from 'react'
import GamesFiltered from '../../components/GamesFiltered'

export default function ProfileGames() {
  return (
    <>
    <div className='container'>
        <GamesFiltered filter={"Played"} filterTitle={"Games"} showRating={true} />
    </div>
    </>
  )
}