import React from 'react';
import GamesFiltered from '../../components/GamesFiltered'

export default function ProfileLikes() {
  return (
    <>
    <div className='container'>
    <GamesFiltered filter={"Liked"} filterTitle={"Liked"} />
    </div>
    </>
  )
}
