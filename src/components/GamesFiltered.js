import React from 'react'
import { trendingGames, newReleases } from '../data/GameData';
import { listFill } from './../functions/listFill';
import { Games } from './../pages/GamesList';

export default function GamesFiltered(props) {
    const gameObj = listFill(props.filter)
    const title = gameObj[0].title
    console.log(gameObj)

    return (
        <>
            <h1 className='my-3'>{title}</h1>
            <hr />
            <div clsssName="row d-flex overflow-auto">
                {/* flex-wrap makes it start a new line, d-flex makes it inline */}
            <div className='col d-flex flex-wrap'>
            {gameObj.map((game, gameIndex) => (
                          <div key={gameIndex} className="col-2 p-0 m-0">{game.game}{game.title}</div>
                        ))}
            </div>
            </div>
        </>
    )
}