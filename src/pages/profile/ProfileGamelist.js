import React from 'react'
import GamesFiltered from '../../components/GamesFiltered'

export function ProfileGamelist() {
  return (
    <>
    <div className='container'>
    <GamesFiltered filter={"GameList"} filterTitle={"Game List"} />
    </div>
    </>
  )
}
