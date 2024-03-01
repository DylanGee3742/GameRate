import React from 'react'
import { trendingGames, newReleases } from '../data/GameData';
import { listFill } from './../functions/listFill';
import { Games } from './../pages/GamesList';

export function GameReview(props) {
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
            <h1 className='my-3'>Recent Reviews</h1>
            <hr />
            <div clsssName="row d-flex">
                {/* flex-wrap makes it start a new line, d-flex makes it inline */}
                <div className='col- flex-column'>
                    {gameObj.map((game, gameIndex) => (
                        <>
                        <div key={gameIndex} className="col p-0 m-0 d-flex" >
                            <div className='col-2'>
                            {game.game}
                            </div>
                            <div className="col d-flex flex-column">
                                <p className='p-0 m-3'><strong>{game.title}</strong></p>
                                <p className='p-0 m-3'>STARS</p>
                                <p className='p-0 m-3'>Played 22 Oct 2023</p>
                                <p className='p-0 m-3'>{game.review}</p>
                            </div>
                        </div>
                        <hr />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
