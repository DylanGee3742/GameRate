import React from 'react'
import { trendingGames, newReleases } from '../data/GameData';
import { listFill } from './../functions/listFill';
import { Games } from './../pages/GamesList';

export default function GamesFiltered(props) {
    const gameObj = listFill(props.filter)
    const title = props.filterTitle
    const games = []
    console.log(gameObj)

    for (let i = 0; i < gameObj.length; i++) {
        games.push(gameObj[i].game)
    }

    console.log(games)

    return (
        <>
            <h1>{title}</h1>
            <div clsssName="row d-flex overflow-auto">
                {/* flex-wrap makes it start a new line, d-flex makes it inline */}
            <div className='col d-flex flex-wrap'>
            {gameObj.map((game, gameIndex) => (
                          <div key={gameIndex} className="col-2 p-0 m-0">{game.game}</div>
                        ))}
            </div>
            </div>
        </>
    )
}