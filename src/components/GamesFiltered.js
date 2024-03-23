import React from 'react'
import { trendingGames, newReleases } from '../data/GameData';
import { listFill } from './../functions/listFill';
import { Games } from './../pages/GamesList';
import { NavLink, useLocation } from 'react-router-dom';

export default function GamesFiltered(props) {
    const gameObj = listFill(props.filter)
    const title = gameObj[0].title

    return (
        <>
            <h1 className='my-3'>{title}</h1>
            <hr />
            <div className="row d-flex overflow-auto">
                {/* flex-wrap makes it start a new line, d-flex makes it inline */}
            <div className='col d-flex flex-wrap'>
            {gameObj.map((game, gameIndex) => (
                          <NavLink key={gameIndex} to={`${game.id}`} gamepicture={game.game} gametitle={game.title} className="col-md-3 mt-1">{game.game}{game.title}{game.id}</NavLink>
                        ))}
            </div>
            </div>
        </>
    )
}