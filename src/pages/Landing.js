import React from 'react'
import { GameListContainer } from '../components/GameListContainer';
import { listFill } from '../functions/listFill';

export function Landing({ loggedIn }) {
  const recentGames = listFill('recent');
  const trendingGames = listFill('trending')
  const newReleases = listFill('newrelease')

  return (
    <>
      <div className="container">
        {loggedIn ? <GameListContainer filter={recentGames} listTitle={"New From Friends"} gameCarouselID={"newFromFriends"} /> : ""}
        <GameListContainer filter={trendingGames} listTitle={"Trending Games"} gameCarouselID={"trending"} />
        <GameListContainer filter={newReleases} listTitle={"New Releases"} gameCarouselID={"newReleases"} />
      </div>
    </>
  )
}
