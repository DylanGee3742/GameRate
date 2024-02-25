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
            <div className="col">
            {gameObj.map((game, gameIndex) => (
                          <div key={gameIndex} className="col-md-3 mt-1">{game.game}{gameIndex}</div>
                        ))}
            </div>
        </>
    )
}